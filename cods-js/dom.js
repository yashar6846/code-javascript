const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (item) {
  if (item.textContent.includes("Js")) {
    item.remove();
  }
});

//createElement

const newParagraph = document.createElement("p");
newParagraph.textContent = `This is newBook`;
document.querySelector("body").appendChild(newParagraph);

//>>>>>>>>>
const cartItems = [
  {
    title: "Book",
    price: 23,
    exist: false,
  },
  {
    title: "Book1",
    price: 45,
    exist: true,
  },
  {
    title: "Book2",
    // price: 56,
    exist: true,
  },
];
const availableProducts = cartItems.filter(function (item) {
  return item.exist === true;
});
const message = document.createElement("h2");
message.textContent = `Number of available products: ${availableProducts.length}`;
document.querySelector("body").appendChild(message);

cartItems.forEach(function (item) {
  const p = document.createElement("p");
  p.textContent = `${item.title} `;
  document.querySelector("body").appendChild(p);
});

//Event

document
  .querySelector("#add_product")
  .addEventListener("click", function (e) {});

//remove
document.querySelector("#remove_all").addEventListener("click", function (e) {
  document.querySelectorAll(".product").forEach(function (item) {
    item.remove();
  });
});

//input
document
  .querySelector("#search-products")
  .addEventListener("change", function (e) {});

//searchInput
const products = [
  {
    title: "Node.js Desing Patterns",
  },
  {
    title: "You Dont Know Js: this & Object Prototypes",
  },
  {
    title: "Function React",
  },
  {
    title: "You Dont Know Async & Performance",
  },
];

const filters = {
  searchItem: "",
};

const renderProducts = function (products, filters) {
  const filteredProducts = products.filter(function (item) {
    return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
  });
  document.querySelector("#products").innerHTML = "";
  filteredProducts.forEach(function (item) {
    const productEl = document.createElement("p");
    productEl.textContent = item.title;
    document.querySelector("#products").appendChild(productEl);
  });
};

renderProducts(products, filters);

document
  .querySelector("#search-products")
  .addEventListener("input", function (e) {
    filters.searchItem = e.target.value;
    renderProducts(products, filters);
  });

///form
document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.productTitle.value);
    e.target.elements.productTitle.value = "";
  });
