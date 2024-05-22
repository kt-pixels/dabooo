// SHOW AND HIDE CODE STARTED FROM HERE
// BUTTON
const face_product_btn = document.getElementById('face_product_btn')
const eye_product_btn = document.getElementById('eye_product_btn')

// CONTAINERS
const face_make_up_products = document.getElementById('face_make_up_products')
const eyes_make_up_products = document.getElementById('eyes_make_up_products')

// Show hide listners
face_product_btn.addEventListener('click', () => {
    if(face_make_up_products.style.display === 'none' || face_make_up_products.style.display === ''){
        face_make_up_products.style.display = 'block'
        eyes_make_up_products.style.display = 'none'
    }else{
        face_make_up_products.style.display = 'block'
    }
})

eye_product_btn.addEventListener('click', () => {
    if(eyes_make_up_products.style.display === 'none' || eyes_make_up_products.style.display === ""){
        eyes_make_up_products.style.display = 'block'
        face_make_up_products.style.display = 'none'
    }else{
        eyes_make_up_products.style.display = 'block'
    }
})


// Face product list or data code is this
const MakeProductsForm = document.getElementById("submitNewProduct");

const addNewMakeUp_btn = document.getElementById("addNewMakeUp");
const productFormContainer = document.getElementById("productFormContainer");

let editAllProductsId = null;

addNewMakeUp_btn.addEventListener("click", () => {
  if (
    productFormContainer.style.display === "none" ||
    productFormContainer.style.display === ""
  ) {
    productFormContainer.style.display = "block";
  } else {
    productFormContainer.style.display = "none";
  }
});

MakeProductsForm.addEventListener("click", () => {
  const category = document.getElementById("productCategory").value;
  const brand = document.getElementById("productBrand").value;
  const price = document.getElementById("productPrice").value;
  const color = document.getElementById("productColor").value;
  const imageFile = document.getElementById("productImage").files[0];

  if (category && brand && price && color && imageFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;

      const allProductsData = {
        id: editAllProductsId
          ? editAllProductsId
          : "allProducts_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editAllProductsId
          ? JSON.parse(localStorage.getItem(editAllProductsId)).quantity
          : 0,
      };

      localStorage.setItem(allProductsData.id, JSON.stringify(allProductsData));
      editAllProductsId = null;
      displayAllProducts();
      clearMakeUpForm();

      productFormContainer.style.display = "none";
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      reader.onload(); // Manually trigger onload if there's no new image file
    }
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayAllProducts = () => {
  const categories = [
    "Foundation",
    "Concealer",
    "Powder",
    "Blush",
    "Bronzer",
    "Highlighter",
    "Primer",
  ];
  categories.forEach((category) => {
    const categoryDiv = document.getElementById(category);
    if (categoryDiv) {
      const productsContainer = categoryDiv.querySelector(
        `.${category.toLowerCase()}_products`
      );
      if (productsContainer) {
        productsContainer.innerHTML = "";
      }
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("allProducts_")) {
      const allProductsData = JSON.parse(localStorage.getItem(key));
      const productsDiv = document.createElement("div");

      productsDiv.className = "_product";

      productsDiv.innerHTML = `
      <div style="display: flex">
      <button onclick="editAnyProduct('${allProductsData.id}')">Edit</button>
      <button onclick="deleteAnyProduct('${allProductsData.id}')">Delete</button>
      </div>
            <img src="${allProductsData.image}" alt="${allProductsData.brand}">
            <div class="quantity">
              <p>Brand : ${allProductsData.brand}</p>
              <p>Color : ${allProductsData.color}</p>
              <p>Quantity : <button onclick="decreaseSpecificQuantity('${allProductsData.id}')">-</button>
              <input type="number" value="${allProductsData.quantity}" readonly>
              <button onclick="increaseSpecificQuantity('${allProductsData.id}')">+</button></p>
            </div>
            `;
      const categoryDiv = document
        .getElementById(allProductsData.category)
        .querySelector(`.${allProductsData.category.toLowerCase()}_products`);

      categoryDiv.appendChild(productsDiv);
    }
  }
};

displayAllProducts();

const clearMakeUpForm = () => {
  document.getElementById(
    "productCategory"
  ).value = `<option>--SELECT--</option>`;
  document.getElementById("productBrand").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productColor").value = "";
  document.getElementById("productImage").value = "";
};

const increaseSpecificQuantity = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData) {
    productData.quantity += 1;
    localStorage.setItem(id, JSON.stringify(productData));
    displayAllProducts();
  }
};

const decreaseSpecificQuantity = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData && productData.quantity > 0) {
    productData.quantity -= 1;
    localStorage.setItem(id, JSON.stringify(productData));
    displayAllProducts();
  }
};

const editAnyProduct = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData) {
    document.getElementById("productCategory").value = productData.category;
    document.getElementById("productBrand").value = productData.brand;
    document.getElementById("productPrice").value = productData.price;
    document.getElementById("productColor").value = productData.color;
    document.getElementById("productImage").files[0] = productData.image;
    editAllProductsId = id;

    productFormContainer.style.display = "block";
  }
};

const deleteAnyProduct = (id) => {
  localStorage.removeItem(id);
  displayAllProducts();
};

document.addEventListener("DOMContentLoaded", displayAllProducts);

// NEW CODE FOR EYES MAKE UP

const addNewEyeMakeUp = document.getElementById("addNewEyeMakeUp");
const EyesProductForm = document.getElementById("EyeproductFormContainer");

const submitNewEyeProduct = document.getElementById("submitNewEyeProduct");

let editEyesProductId = null;

addNewEyeMakeUp.addEventListener('click', () => {
    if(EyesProductForm.style.display === 'none' || EyesProductForm.style.display === ''){
        EyesProductForm.style.display = 'block'
    }else{
        EyesProductForm.style.display = 'none'
    }
})

submitNewEyeProduct.addEventListener("click", () => {
  const category = document.getElementById("eyeproductCategory").value;
  const brand = document.getElementById("EyeproductBrand").value;
  const price = document.getElementById("EyeproductPrice").value;
  const color = document.getElementById("EyeproductColor").value;
  const image = document.getElementById("EyeproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const EyeProducts = {
        id: editEyesProductId
          ? editEyesProductId
          : "eyes_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editEyesProductId
          ? JSON.parse(localStorage.getItem(editEyesProductId)).quantity
          : 0,
      };

      localStorage.setItem(EyeProducts.id, JSON.stringify(EyeProducts));
      editEyeProduct = null;
      displayEyeProducts();
      clearEyeProductsForm();

      EyesProductForm.style.display === 'none'
    };

    if (image) {
      reader.readAsDataURL(image);
    } else {
      reader.onload();
    }
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayEyeProducts = () => {
  const categoryDiv = [
    "Eyeshadow",
    "Eyeliner",
    "Mascara",
    "Eyebrow Pencil",
    "Eyebrow Gel",
    "Eyelash Curler",
    "Eye Primer",
  ];

  categoryDiv.forEach((category) => {
    const categoryDiv = document.getElementById(category);
    if (categoryDiv) {
      const productContainer = categoryDiv.querySelector(
        `.${category}_products`
      );
      if (productContainer) {
        productContainer.innerHTML = "";
      }
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("eyes_")) {
      const productsList = JSON.parse(localStorage.getItem(key));
      const productDiv = document.createElement("div");

      productDiv.className = "_eye_product";

      productDiv.innerHTML = `
        <div style="display: flex">
      <button onclick="editEyeProduct('${productsList.id}')">Edit</button>
      <button onclick="deleteEyeProduct('${productsList.id}')">Delete</button>
      </div>
            <img src="${productsList.image}" alt="${productsList.brand}">
            <div class="quantity">
              <p>Brand : ${productsList.brand}</p>
              <p>Color : ${productsList.color}</p>
              <p>Quantity : <button onclick="decreaseEyeQuantity('${productsList.id}')">-</button>
              <input type="number" value="${productsList.quantity}" readonly>
              <button onclick="increaseEyeQuantity('${productsList.id}')">+</button></p>
            </div>
        `;
      const categoryDiv = document
        .getElementById(productsList.category)
        .querySelector(`.${productsList.category}_products`);

      categoryDiv.appendChild(productDiv);
    }
  }
};

displayEyeProducts();

const decreaseEyeQuantity = (id) => {
  const productLists = JSON.parse(localStorage.getItem(id));
  if (productLists && productLists.quantity > 0) {
    productLists.quantity -= 1;
    localStorage.setItem(id, JSON.stringify(productLists));
    displayEyeProducts();
  }
};

const increaseEyeQuantity = (id) => {
  const productLists = JSON.parse(localStorage.getItem(id));
  if (productLists) {
    productLists.quantity += 1;
    localStorage.setItem(id, JSON.stringify(productLists));
    displayEyeProducts();
  }
};

const editEyeProduct = (id) => {
  const productLists = JSON.parse(localStorage.getItem(id));
  document.getElementById("eyeproductCategory").value = productLists.category;
  document.getElementById("EyeproductBrand").value = productLists.brand;
  document.getElementById("EyeproductPrice").value = productLists.price;
  document.getElementById("EyeproductColor").value = productLists.color;
  document.getElementById("EyeproductImage").files[0] = productLists.image;
  editEyesProductId = id;

  EyesProductForm.style.display === 'block'
};

const deleteEyeProduct = (id) => {
  localStorage.removeItem(id);
  displayEyeProducts();
};

const clearEyeProductsForm = () => {
  document.getElementById("eyeproductCategory").value = "";
  document.getElementById("EyeproductBrand").value = "";
  document.getElementById("EyeproductPrice").value = "";
  document.getElementById("EyeproductColor").value = "";
  document.getElementById("EyeproductImage").files[0] = "";
};
