const titleElement = document.querySelector("#product-title");
const priceElement = document.querySelector("#product-price");
const removeElement = document.querySelector("#remove-product");

const productId = location.hash.substring(1);
const products = getSeveProducts();
const product = products.find(function (item) {
  return item.id === productId;
});
if (product === undefined) {
  location.assign("/index.html");
}
titleElement.value = product.title;
priceElement.value = product.price;

titleElement.addEventListener("input", function (e) {
  product.title = e.target.value;
  // product.updated = moment().valueOf()
  // dateElement.textContent = lastEditMessage(product.updated)
  seveProducts(products);
});

priceElement.addEventListener("input", function (e) {
  product.price = e.target.value;
  // product.updated = moment().valueOf()
  // dateElement.textContent = lastEditMessage(product.updated)
  seveProducts(products);
});

removeElement.addEventListener("click", function (e) {
  removeProduct(product.id);
  seveProducts(products);
  location.assign("./index.html");
});
