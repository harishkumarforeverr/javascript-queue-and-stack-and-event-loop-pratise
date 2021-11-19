let arr = [1, 2, 3, 4, 5];
const log = console.log;

log(
  arr.findIndex((val) => {
    return val === 4;
  })
);

log(
  arr.findIndex((val) => {
    return val % 2 === 0;
  })
);
