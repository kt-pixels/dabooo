// Array of products

const products = [
  "Foundation",
  "Concealer",
  "Lipstick",
  "Eyeshadow",
  "Powder",
  "Blush",
  "Bronzer",
  "Highlighter",
  "Primer",
  "Skincare",
  "Haircare",
  "Body Care",
  "Nail Care",
  "Fragrance",
  "Additional Tools",
  "Purses",
];

// CREATE ELEMENT

const searchBar = document.querySelector(".search_bar input");
const productsContainer = document.querySelector(".products");
const productsDiv = document.createElement("div");

productsDiv.classList.add("products_list");
productsContainer.appendChild(productsDiv);

// SHOW HIDE PRODUCT CONTAINER

if (products.length > 0) {
  productsContainer.style.display = "block";
}

// Search Function

const searchProducts = (searchText) => {
  productsDiv.innerHTML = "";

  // Filter the products
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchText.toLowerCase())
  );

  //   Display filtered Products
  filteredProducts.forEach((product) => {
    const productItems = document.createElement("p");
    productItems.textContent = product;
    productsDiv.appendChild(productItems);
  });
};

// Listner

searchBar.addEventListener('input', (e) => {
const searchText = e.target.value
if(searchText){
    searchProducts(searchText)
}
else{
    productsDiv.innerHTML = ""
}
})
