function debounceHelper() {
  let pending;
  const debounce = (f, t, ...args) => {
    if (pending) {
      clearTimeout(pending);
    }
    pending = setTimeout(() => {
      f(...args);
    }, t);
  };
  return debounce;
}

let debounce = debounceHelper();

function throttleHelper() {
  let pending;
  const throttle = (f, t, ...args) => {
    console.log('>>>>here', pending);
    if (pending) {
      return void 0;
    }
    pending = setTimeout(() => {
      f(...args);
      pending = false;
    }, t);
  };
  return throttle;
}

let throttle = throttleHelper();

export { debounce, throttle };
