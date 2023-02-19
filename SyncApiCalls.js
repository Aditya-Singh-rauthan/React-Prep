function DummyApi(t, rej) {
  return () => {
    let api = new Promise((resolve, reject) => {
      setTimeout(() => {
        rej ? reject(`Error thrown for ${t}`) : resolve(`API Response>>>${t}`);
      }, t);
    });
    return api;
  };
}

function SyncApis(a) {
  let p = new Promise((r, rej) => {
    let result = [];
    if (a.length <= 0) {
      return r([]);
    }
    a[0]()
      .then((res) => {
        result.push(res);
        SyncApis(a.slice(1, a.length))
          .then((q) => {
            result.push(...q);
            r(result);
          })
          .catch((err) => {
            result.push(...err);
            r(result);
          });
      })
      .catch((err) => {
        result.push(err);
        SyncApis(a.slice(1, a.length))
          .then((q) => {
            result.push(...q);
            rej(result);
          })
          .catch((err) => {
            result.push(...err);
            r(result);
          });
      });
  });
  return p;
}

let c = SyncApis([
  DummyApi(1000),
  DummyApi(2000),
  DummyApi(4000, true),
  DummyApi(6000),
]);

c.then((res) => {
  console.log('>>>>re', res);
});
// console.log(c)
