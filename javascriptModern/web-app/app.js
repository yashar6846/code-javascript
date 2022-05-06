let products = getSeveProducts();

const filters = {
  searchItem: "",
  availableProducts: false,
};

renderProducts(products, filters);

document
  .querySelector("#search-products")
  .addEventListener("input", function (e) {
    filters.searchItem = e.target.value;
    renderProducts(products, filters);
  });

document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = uuidv4();
    products.push({
      id: id,
      title: e.target.elements.productTitle.value,
      price: e.target.elements.productPrice.value,
      exists: true,
    });
    seveProducts(products);
    renderProducts(products, filters);
    e.target.elements.productTitle.value = "";
    e.target.elements.productPrice.value = "";
  });

document
  .querySelector("#available-products")
  .addEventListener("change", function (e) {
    filters.availableProducts = e.target.checked;
    renderProducts(products, filters);
  });
