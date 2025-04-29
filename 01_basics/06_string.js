const name = "faisal";
const repoCount = 60;

// console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);


const gamingName = new String("faisal-fk");

console.log(gamingName[4]);
console.log(gamingName.toUpperCase());
console.log(gamingName.charAt(3));
console.log(gamingName.indexOf("k"));


const newString = gamingName.substring(0,4)
console.log(newString);

const anotherString = gamingName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  faisal  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://faisal.com/faisal%30khan"
console.log(url.replace("%30", "-"));
console.log(url.includes("faisal"));

console.log(gamingName.split("-"));










