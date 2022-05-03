let userInfo = {
  userId: 22,
  username: "yashar",
  role: "Admin",
};
// console.log(`User role is: ${userInfo.role}`);
let userInfoTow = {
  userId: 12,
  username: "Test",
  role: "Admin",
};

const fetchUserData = function (user) {
  //   console.log(`Username is: ${user.username}: ${user.userId}`);
};
fetchUserData(userInfo);
fetchUserData(userInfoTow);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let userAccount = {
  fullName: "yashar",
  outgo: 0,
  income: 0,
};

let addOutgo = function (account, amount) {
  account.outgo = account.outgo + amount;
};
let addIncome = function (account, incom) {
  account.income = account.income + incom;
};
let getAccountData = function (account) {
  let balance = account.income - account.outgo;
  return `Account Name: ${account.fullName} - Balance ${balance}`;
};

addIncome(userAccount, 2000);
addOutgo(userAccount, 500);
addOutgo(userAccount, 50);
// console.log(getAccountData(userAccount));

//<<<<<<<<<<<<<<<<<<<<<<
let course = {
  name: "Advanced Js",
  studentLimit: 30,
  studentCount: 0,
  checkAvailability: function (courseSize) {
    let leftCount = this.studentLimit - this.studentCount;
    return courseSize <= leftCount;
  },
};
let status = course.checkAvailability(20);
// console.log(status);

//............searche
const cartItems = [
  {
    title: "Book",
    price: 23,
  },
  {
    title: "Book1",
    price: 45,
  },
  {
    title: "Book2",
    price: 56,
  },
];

const findProducts = function (cart, productTite) {
  return cart.find(function (item, index) {
    return item.title.toLowerCase() === productTite.toLowerCase();
  });
};

const result = findProducts(cartItems, "book2");
// console.log(result);
