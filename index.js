let result = Number("123") + 7;
console.log(result);

//================================================

function checkFalsy(value) {
  if (!value) {
    return "Invalid";
  }
  return value;
}
console.log(checkFalsy(0));

//================================================

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);}

//================================================

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//================================================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//================================================

function getDayOfWeek(dayNum) {
  switch (dayNum) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(getDayOfWeek(2));

//================================================

const strings = ["a", "ab", "abc"];
const lengths = strings.map(str => str.length);
console.log(lengths); // [1, 2, 3]

//================================================

function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(checkDivisible(15));

//================================================

const square = num => num * num;
console.log(square(5));

//================================================

function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: 'John', age: 25 };
console.log(formatPerson(person));
//================================================

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

//================================================

function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

//================================================

function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4]));

//================================================

function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({ name: "John", age: 30 }));
//================================================

function splitString(str) {
  return str.split(" ");
}
console.log(splitString("The quick brown fox"));
