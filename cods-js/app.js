const products = [
  {
    title: "Book 1",
    price: 56,
    exist: true,
  },
  {
    title: "Book 2",
    price: 32,
    exist: false,
  },
  {
    title: "Book 3",
    price: 45,
    exist: false,
  },
  {
    title: "Book 4",
    price: 67,
    exist: true,
  },
];
//.............................forEach
// products.forEach((item) => {
//   console.log(`this is ${item.title}`);
// });

// ////....................filter
// const filterdprodact = products.filter((item) => item.exist === true);
// console.log(filterdprodact);

// //................sort
// const sortproduct = products.sort((a, b) => {
//   if (a.price > b.price) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortproduct);

// //.............map
// const productName = products.map((item) => {
//   return item.title;
// });
// console.log(productName);
// // products.map((item) => {
// //   console.log(item.price);
// // });
// const create = products.map((item) => {
//   return (item.price * 20) / 100;
// });
// console.log(create);

// //..................reduce
// const totalPrice = products.reduce((item, total) => {
//   return item + total.price;
// }, 0);
// console.log(totalPrice);
const numbers = [1, 2, 3, 4, "yasin"];

//for
let max = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] < max) {
    max = numbers[i];
  }
}
console.log(max);
// let numbers = [1, true, 2, 3, 4, "yasin"];
// let x = numbers.splice(1, 2, "nex", "true");
// let y = numbers.slice(1, 3);
// console.log(numbers);
// // console.log(numbers);
// console.log(x);
// console.log(y);
// console.log(numbers);
// let y = numbers.slice(1);
// let x = numbers.splice(1);

// console.log(numbers);

// console.log(x);
// console.log(y);
