import React from "React";
import ReactDOM from "react-dom";
import {c as name} from "./component/myName"
const obj={
  a:1,
  b:2,
  c:3
}
let Objname=name('sal')
ReactDOM.render(
  <div>hello,React</div>,
  document.getElementById('root')
)
console.log({...obj,...Objname});
