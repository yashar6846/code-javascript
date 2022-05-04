const getSeveProducts = function () {
  const productsJSON = localStorage.getItem("products");
  if (productsJSON !== null) {
    return JSON.parse(productsJSON);
  } else {
    return [];
  }
};
const seveProducts = function (products) {
  localStorage.setItem("products", JSON.stringify(products));
};

const removeProduct = (id) => {
  const productIndex = products.findIndex((item) => item.id === id);
  if (productIndex > -1) {
    products.splice(productIndex, 1);
  }
};

const renderProducts = function (products, filters) {
  let filterdProducts = products.filter(function (item) {
    return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
  });
  filterdProducts = filterdProducts.filter(function (item) {
    if (filters.availableProducts) {
      return item.exist;
    } else {
      return true;
    }
  });
  document.querySelector("#products").innerHTML = "";
  filterdProducts.forEach(function (item) {
    document.querySelector("#products").appendChild(createProductDOM(item));
  });
};

const createProductDOM = function (product) {
  const productEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const productItem = document.createElement("a");
  const removeButten = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = !product.exist;
  productEl.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleProduct(product.id);
    seveProducts(products);
    renderProducts(products, filters);
  });

  productItem.textContent = product.title;
  productItem.setAttribute("href", `./edit-product.html#${product.id}`);

  productEl.appendChild(productItem);

  removeButten.textContent = "Remove";
  productEl.appendChild(removeButten);

  return productEl;
};
