const allProduct_btn = document.getElementById("allProduct_btn");
const addProduct_btn = document.getElementById("addProduct_btn");
const purses_btn = document.getElementById("purses_btn");
const lipstics_btn = document.getElementById("lipstics_btn");

const allProducts = document.getElementById("allProducts");
const addProducts = document.getElementById("addProducts");
const purses = document.getElementById("purses");
const lipsticss = document.getElementById("lipsticss");

// all pages 
const face_make_up_product = document.getElementById('face_make_up_products')
const eyes_make_up_product = document.getElementById('eyes_make_up_products')

// Main page
const noPage = document.getElementById("no_page_is_open");

const saveProduct_btn = document.getElementById("saveProduct");
const productsList = document.getElementById("productsList");

let editProductId = null;

allProduct_btn.addEventListener("click", () => {
  if (
    allProducts.style.display === "none" ||
    allProducts.style.display === ""
  ) {
    allProducts.style.display = "block";
    addProducts.style.display = "none";
    purses.style.display = "none";
    lipsticss.style.display = "none";
    displayProducts();
  } else {
    allProducts.style.display = "block";
  }
});

addProduct_btn.addEventListener("click", () => {
  if (
    addProducts.style.display === "none" ||
    addProducts.style.display === ""
  ) {
    addProducts.style.display = "block";
    allProducts.style.display = "none";
    purses.style.display = "none";
    lipsticss.style.display = "none";
  } else {
    addProducts.style.display = "block";
  }
  // Clear the form and reset editProductId when switching to add product form
  clearForm();
  editProductId = null;
});

purses_btn.addEventListener("click", () => {
  if (purses.style.display === "none" || purses.style.display === "") {
    purses.style.display = "block";
    addProducts.style.display = "none";
    allProducts.style.display = "none";
    lipsticss.style.display = "none";
  } else {
    purses.style.display = "block";
  }
});

lipstics_btn.addEventListener("click", () => {
  if (lipsticss.style.display === "none" || lipsticss.style.display === "") {
    lipsticss.style.display = "block";
    purses.style.display = "none";
    addProducts.style.display = "none";
    allProducts.style.display = "none";
  } else {
    lipsticss.style.display = "block";
  }
});

saveProduct_btn.addEventListener("click", () => {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productImage = document.getElementById("products_Image").files[0];
  const productDescription =
    document.getElementById("productDescription").value;
  const productCategory = document.getElementById("productCategory").value;

  if (
    productName &&
    productPrice &&
    productCategory !== "--SELECT--" &&
    productImage
  ) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const productsImage = event.target.result;
      const productData = {
        id: editProductId ? editProductId : "product_" + new Date().getTime(),
        name: productName,
        price: productPrice,
        image: productsImage,
        description: productDescription,
        category: productCategory,
      };

      localStorage.setItem(productData.id, JSON.stringify(productData));
      editProductId = null; // Reset editProductId after saving
      displayProducts();

      // Clear the input fields
      clearForm();

      // Switch to add product form
      addProducts.style.display = "none";
      allProducts.style.display = "block";
    };

    reader.readAsDataURL(productImage);
  } else {
    alert("Please fill in all the required fields.");
  }
});

function displayProducts() {
  productsList.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("product_")) {
      const productData = JSON.parse(localStorage.getItem(key));
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
                <div class="tag">${productData.category}</div>
                <div class="pro_details">
                    <div class="name">
                        <p>${productData.name}</p>
                        <br/>
                        <p>$ ${productData.price}</p>
                    </div>
                    <div class="p_image">
                    <img src="${productData.image}" alt="" />
                    </div>
                </div>
                <div class="options">
                    <button onclick="editProduct('${productData.id}')">Edit</button>
                    <button onclick="deleteProduct('${productData.id}')">Delete</button>
                </div>
            `;
      productsList.appendChild(productDiv);
    }
  }
}

function editProduct(id) {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData) {
    document.getElementById("productName").value = productData.name;
    document.getElementById("productPrice").value = productData.price;
    document.getElementById("productDescription").value =
      productData.description;
    document.getElementById("productCategory").value = productData.category;
    editProductId = id;

    // Switch to add product form
    addProducts.style.display = "block";
    allProducts.style.display = "none";
  }
}

function deleteProduct(id) {
  localStorage.removeItem(id);
  displayProducts();
}

function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productCategory").value = "--SELECT--";
}

// Initial call to display products if any
displayProducts();
