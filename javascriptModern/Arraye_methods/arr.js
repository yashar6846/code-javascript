let array1 = [10, 14.5, -16, 18.7, 13];

mx = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > mx) {
    mx = array1[i];
  }
}

console.log(mx);
// let filterd = array1.filter((value) => value < 0);
// console.log(filterd);
