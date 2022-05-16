let numbers = [0, 2, -1, 23, 7];
let result;

result = numbers.sort((x, y) => x - y);

result = numbers
  .filter((number) => number > 0)
  .map((number) => `<li>${number}</li>`);
// result = result.join();
// result = `<ul>${result.join(" ")}</ul>`;

result = numbers.reduce((sum, cvalue) => sum + cvalue);

console.log(result);
console.log(numbers);
