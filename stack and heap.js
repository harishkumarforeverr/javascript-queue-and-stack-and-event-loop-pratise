let arr = ["harish kumar"];
const upperCase = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
const Converter = (str) => {
  const newstr = str.split(" ");
  newstr.forEach((str, i) => {
    newstr[i] = upperCase(str);
  });
  return newstr.join(" ");
};

console.log(Converter("harish is good boy"));
