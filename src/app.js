// 전역 스코프가 오염된다.
// console.log(sum(1, 2));

// ===================================================== //

// 전역 스코프에 있는 math에 접근하여 sum을 호출한다.
// console.log(math.sum(1, 2));

// ===================================================== //

// 모든 export를 math라는 객체로 가져오는 방법
// import * as math from "./math.js";
// math객체의 sum 함수만 가져오는 경우
// import { sum } from "./math.js";

// import axios from "axios";
// import "./app.css";

// document.addEventListener("DOMContentLoaded", async () => {
//   const model = {
//     async get() {
//       //   const result = await axios.get("/api/keywords");
//       //   return result.data;
//     }
//   };
//   console.log(model);
//   document.body.innerHTML = `<div>$<div>`;
// });

// == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** ==
// == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** ==

// const alert = msg => window.alert(msg);
// == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** ==
// == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** == ** ==

// new Promise();
