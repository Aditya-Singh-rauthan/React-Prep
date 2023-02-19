import * as React from 'react';
import './style.css';
import { debounce, throttle } from './Utilities/Debounce';
// function debounce(f: Function, t: number) {
//   let call: number;
//   return (...args: any[]) => {
//     console.log('>>>>calll', call);
//     clearTimeout(call);
//     call = setTimeout(() => {
//       f(...args);
//     }, t);
//   };
// }
export default function App() {
  let [text, setText] = React.useState('');
  let Search = React.useCallback((t: string) => {
    setTimeout(() => {
      setText(text + t);
    }, 2000);
  }, []);
  // let Debounce = React.useCallback(debounce(Search, 1000), [Search]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{text}</p>
      <input
        type="text"
        onChange={(e) => throttle(Search, 1000, e.target.value)}
      />
    </div>
  );
}
