// setTimeout(() => {
//   console.log("woeking hahah");
// }, 3000);

// /// 2nd part
// const id = setTimeout(() => {
//   console.log("im need to work ");
// }, 3000);

// setTimeout(() => {
//   console.log("clearing setInterval", id);
//   clearInterval(id);
// }, 2000);

// setInterval
// const NewId=
let num = 0;
const Id = setInterval(() => {
  console.log(" im a Interval ", num);
  num++;
  debugger;
  if (num == 4) clearInterval(Id);
}, 2000);
