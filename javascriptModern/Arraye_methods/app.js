///arraye  is  object: length and  is

// let arr = [];
// console.log(typeof arr); //object
// console.log(arr.length);
// arr[3] = "yashar"; //ad array
// console.log(arr);
// //
// let a = [1, "yashar", true];
// let b = [1, "yashar", true];
// console.log(a == b);
// console.log(a[0] == b[0]);

///>>>>>>>>>>>>>>/ +
// const grades = [13, 17, 18, 20, 11];
// let sum1 = 0;
// for (let i = 0; i < grades.length; i++) {
//   result = sum += grades[i];
// }
// let element = sum / grades.length;
//  console.log(element);
//  console.log(result);
// //...............%
// const grade = [13, 17, 18, 20, 11];

// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] % 2 == 0) {
//     console.log(grades[i]);
//   }
// }

///.....+ forof
const grades = [13, 17, 18, 20, 11];
// let sum2 = 0;
// for (const number of grades) {
//   result = sum2 += number;
// }
// console.log(result);

//forEach
grades.forEach((number, index) => {
  //   console.log(`${index}:${number}`);
});
//reast operator
grade = { ...grades };
// console.log(grade);
//map
grads = grades.map((item) => ({ item }));
// console.log(grads);

// const grades = [13, 17, 18, 20, 11];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   result = sum += grades[i];
// }
// // console.log(result);

// ///><
let array1 = [10, 14.5, 16, 9, 18.7, 13];

// max = 0;
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] > max) {
//     max = array1[i];
//   }
// }
// console.log(max);
// const found = array1.find((element) => element < 10);
// console.log(found);

//method
let array = [1, true, "next1code", 13];
// console.log(array.join(" "));
//split() convert to string  a array
convert = { ...array };
// console.log(convert);

// let a = array.pop();
// console.log(array);
// console.log(a);
//..........................

// unshift.push.splice;
// shift.pop.slice

let s = array.splice(1, 2, false, "yash");
// console.log(array);
// console.log(s);
//................
let a = array.slice(1, 2);
let b = array.splice(1, 2);
array.slice(0); //Empty
array.splice(0, array.length); //Empty

// console.log(a);
// console.log(array);
// console.log(b);
// console.log(array);

//indexOf
//lastIndexOf
//includes
let searching = ["a", "b", "c", "d", "a", "l", "a", "l"];

let search = searching.indexOf("a", 4);
b = searching.lastIndexOf("a");
c = searching.includes("b");
// console.log(search);
// console.log(b);
// console.log(c);

// concat
//spread operators [...]

//sort
//reverse
// let array2 = [0, 1, 3, 4, 5, 2, 6, 7, 9];
// let array3 = ["b", "c", "a", "n", "w", "r", "m", "f", "d"];

// // array2.sort();
// array3.sort();

// // array3.reverse();
// array2.reverse();

// resulte = array2.sort((a, b) => b - a);
// console.log(array3);
// console.log(array2);

//filters
let array2 = [1, 3, 4, 5, 2, 6, 7, 9];

filterd = array2.filter((value) => value >= 0);
// console.log(filterd);

let movies = [
  { title: "a", year: 2019, rating: 4.7 },
  { title: "b", year: 2019, rating: 3.7 },
  { title: "c", year: 2018, rating: 4.8 },
  { title: "d", year: 2019, rating: 4.9 },
];

let bestMonise = movies
  .filter((m) => m.year > 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

// console.log(bestMonise);

let numbers = [1, 3, 14, 5, 7, 9, 10];

let maximum = getMax(numbers);
console.log(maximum);

function getMax(array) {
  if (array.length === 0) {
    return undefined;
  }
  //math
  return Math.max.apply(null, array);

  //for
  // let max = array[0];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  // }
  // return max;

  //reduce
  // return array.reduce((accumulator, current) =>
  //   current > accumulator ? current : accumulator
  // );
}
