// for Eact
let arr = [1, 2, 3, 4, 5];
arr.forEach((e) => {
  console.log(e);
});
// example
let str = ["my", "name", "harish"];

let newstr = "";
str.forEach((val, i, arr) => {
  if (arr.length - 1 == i) {
    newstr += val + "!!!";
  } else {
    newstr += val + " ";
  }
});
console.log(newstr);
