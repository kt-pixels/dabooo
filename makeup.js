// SHOW AND HIDE CODE STARTED FROM HERE
// BUTTON
const face_product_btn = document.getElementById("face_product_btn");
const eye_product_btn = document.getElementById("eye_product_btn");
const lips_product_btn = document.getElementById("lips_product_btn");
const cheeks_product_btn = document.getElementById("cheeks_product_btn");
const makeup_tools_btn = document.getElementById("makeup_tools_btn");
const skin_care_btn = document.getElementById("skin_care_btn");
const hair_care_btn = document.getElementById("hair_care_btn");
const body_care_btn = document.getElementById("body_care_btn");
const nail_care_btn = document.getElementById("nail_care_btn");
const purses_btn = document.getElementById('purses_btn')

// CONTAINERS

const no_page_is_open = document.getElementById('no_page_is_open')

const face_make_up_products = document.getElementById("face_make_up_products");
const eyes_make_up_products = document.getElementById("eyes_make_up_products");
const lips_make_up_products = document.getElementById("lips_make_up_products");
const Tools_make_up_products = document.getElementById(
  "Tools_make_up_products"
);
const skin_care_products = document.getElementById("skin_care_products");
const hair_care_products = document.getElementById("hair_care_products");
const body_care_products = document.getElementById("body_care_products");
const nail_care_products = document.getElementById("nail_care_products");
const purses_products= document.getElementById('purses_products')

// Show hide listners
face_product_btn.addEventListener("click", () => {
  if (
    face_make_up_products.style.display === "none" ||
    face_make_up_products.style.display === ""
  ) {
    face_make_up_products.style.display = "block";
    eyes_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    face_make_up_products.style.display = "block";
  }
});

eye_product_btn.addEventListener("click", () => {
  if (
    eyes_make_up_products.style.display === "none" ||
    eyes_make_up_products.style.display === ""
  ) {
    eyes_make_up_products.style.display = "block";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    eyes_make_up_products.style.display = "block";
  }
});

lips_product_btn.addEventListener("click", () => {
  if (
    lips_make_up_products.style.display === "none" ||
    lips_make_up_products.style.display === ""
  ) {
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "block";
    Tools_make_up_products.style.display = "none";
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    lips_make_up_products.style.display = "block";
  }
});

makeup_tools_btn.addEventListener("click", () => {
  if (
    Tools_make_up_products.style.display === "none" ||
    Tools_make_up_products.style.display === ""
  ) {
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "block";
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    Tools_make_up_products.style.display = "block";
  }
});

skin_care_btn.addEventListener("click", () => {
  if (
    skin_care_products.style.display === "none" ||
    skin_care_products.style.display === ""
  ) {
    skin_care_products.style.display = "block";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    face_make_up_products.style.display = "none";
    eyes_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    skin_care_products.style.display = "block";
  }
});

hair_care_btn.addEventListener("click", () => {
  if (
    hair_care_products.style.display === "none" ||
    hair_care_products.style.display === ""
  ) {
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "block";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    hair_care_products.style.display = "block";
  }
});

body_care_btn.addEventListener("click", () => {
  if (
    body_care_products.style.display === "none" ||
    body_care_products.style.display === ""
  ) {
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "block";
    nail_care_products.style.display = "none";
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    body_care_products.style.display = "block";
  }
});

nail_care_btn.addEventListener("click", () => {
  if (
    nail_care_products.style.display === "none" ||
    nail_care_products.style.display === ""
  ) {
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "block";
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
    purses_products.style.display = 'none'
  } else {
    nail_care_products.style.display = "block";
  }
});

purses_btn.addEventListener('click', () => {
  if(purses_products.style.display === 'none' || purses_products.style.display === ''){
    purses_products.style.display = 'block'
    skin_care_products.style.display = "none";
    hair_care_products.style.display = "none";
    body_care_products.style.display = "none";
    nail_care_products.style.display = "none";
    eyes_make_up_products.style.display = "none";
    face_make_up_products.style.display = "none";
    lips_make_up_products.style.display = "none";
    Tools_make_up_products.style.display = "none";
    no_page_is_open.style.display = 'none'
  }else{
    purses_products.style.display = 'block'
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
      <div style="display: flex; justify-content: space-between;">
      <button 
      onclick="editAnyProduct('${allProductsData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #ffb74d">
      edit
      </span></button>
      <button 
      onclick="deleteAnyProduct('${allProductsData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #f44336">
      delete
      </span></button>
      </div>
            <img src="${allProductsData.image}" alt="${allProductsData.brand}">
            <div class="quantity">
              <p><strong style="font-weight: 800;">Brand</strong> : ${allProductsData.brand}</p>
              <p><strong style="font-weight: 800;">Price</strong> : ${allProductsData.price}</p>
              <p><strong style="font-weight: 800;">Color</strong> : ${allProductsData.color}</p>
              <p><strong style="font-weight: 800;">Quantity</strong> : <button onclick="decreaseSpecificQuantity('${allProductsData.id}')">-</button>
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

addNewEyeMakeUp.addEventListener("click", () => {
  if (
    EyesProductForm.style.display === "none" ||
    EyesProductForm.style.display === ""
  ) {
    EyesProductForm.style.display = "block";
  } else {
    EyesProductForm.style.display = "none";
  }
});

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
      editEyesProductId = null;
      displayEyeProducts();
      clearEyeProductsForm();

      EyesProductForm.style.display = "none";
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
  const categoryDivs = [
    "Eyeshadow",
    "Eyeliner",
    "Mascara",
    "Eyebrow Pencil",
    "Eyebrow Gel",
    "Eyelash Curler",
    "Eye Primer",
  ];

  categoryDivs.forEach((category) => {
    const categoryDiv = document.getElementById(category.replace(/\s/g, "_"));
    if (categoryDiv) {
      const productContainer = categoryDiv.querySelector(
        `.${category.replace(/\s/g, "_")}_products`
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

      productDiv.className = "eyes_product";

      productDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
      <button 
      onclick="editEyeProduct('${productsList.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #ffb74d">
      edit
      </span></button>
      <button 
      onclick="deleteEyeProduct('${productsList.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #f44336">
      delete
      </span></button>
      </div>
            <img src="${productsList.image}" alt="${productsList.brand}">
            <div class="quantity">
              <p><strong style="font-weight: 800;">Brand</strong> : ${productsList.brand}</p>
              <p><strong style="font-weight: 800;">Price</strong> : ${productsList.price}</p>
              <p><strong style="font-weight: 800;">Color</strong> : ${productsList.color}</p>
              <p><strong style="font-weight: 800;">Quantity</strong> : <button onclick="decreaseEyeQuantity('${productsList.id}')">-</button>
              <input type="number" value="${productsList.quantity}" readonly>
              <button onclick="increaseEyeQuantity('${productsList.id}')">+</button></p>
            </div>
        `;
      const categoryDiv = document.getElementById(
        productsList.category.replace(/\s/g, "_")
      );
      if (categoryDiv) {
        const productDivNew = categoryDiv.querySelector(
          `.${productsList.category.replace(/\s/g, "_")}_products`
        );
        if (productDivNew) {
          productDivNew.appendChild(productDiv);
        }
      }
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

  EyesProductForm.style.display = "block";
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
  document.getElementById("EyeproductImage").value = "";
};

document.addEventListener("DOMContentLoaded", displayEyeProducts);

// Code for lips make up products

const addNewLipsMakeUp = document.getElementById("addNewLipsMakeUp");
const LipsproductFormContainer = document.getElementById(
  "LipsproductFormContainer"
);
const submitNewLipsProduct = document.getElementById("submitNewLipsProduct");

let editLipsProductId = null;

addNewLipsMakeUp.addEventListener("click", () => {
  if (
    LipsproductFormContainer.style.display === "none" ||
    LipsproductFormContainer.style.display === ""
  ) {
    LipsproductFormContainer.style.display = "block";
  } else {
    LipsproductFormContainer.style.display = "none";
  }
});

submitNewLipsProduct.addEventListener("click", () => {
  const category = document.getElementById("lipsproductCategory").value;
  const brand = document.getElementById("LipsproductBrand").value;
  const price = document.getElementById("LipsproductPrice").value;
  const color = document.getElementById("LipsproductColor").value;
  const image = document.getElementById("LipsproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const lipsProductData = {
        id: editLipsProductId
          ? editLipsProductId
          : "lips_products_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editLipsProductId
          ? JSON.parse(localStorage.getItem(editLipsProductId)).quantity
          : 0,
      };

      localStorage.setItem(lipsProductData.id, JSON.stringify(lipsProductData));
      editLipsProductId = null;
      displayLipsProducts();
      clearLipsProductsForm();

      LipsproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayLipsProducts = () => {
  const categories = [
    "Lipstick",
    "Lip Gloss",
    "Lip Liner",
    "Lip Balm",
    "Lip Stain",
  ];

  categories.forEach((category) => {
    const categoryDiv = document.getElementById(category.replace(/\s/g, "_"));
    if (categoryDiv) {
      const productContainer = categoryDiv.querySelector(
        `.${category.replace(/\s/g, "_")}_products`
      );
      if (productContainer) {
        productContainer.innerHTML = "";
      }
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("lips_products_")) {
      const lipsProductData = JSON.parse(localStorage.getItem(key));
      const productDiv = document.createElement("div");

      productDiv.className = "lips_product";

      productDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
      <button 
      onclick="editLipProduct('${lipsProductData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #ffb74d">
      edit
      </span></button>
      <button 
      onclick="deleteLipProduct('${lipsProductData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #f44336">
      delete
      </span></button>
      </div>
            <img src="${lipsProductData.image}" alt="${lipsProductData.brand}">
            <div class="quantity">
              <p><strong style="font-weight: 800;">Brand</strong> : ${lipsProductData.brand}</p>
              <p><strong style="font-weight: 800;">Price</strong> : ${lipsProductData.price}</p>
              <p><strong style="font-weight: 800;">Color</strong> : ${lipsProductData.color}</p>
              <p><strong style="font-weight: 800;">Quantity</strong> : <button onclick="decreaselipsQuantity('${lipsProductData.id}')">-</button>
              <input type="number" value="${lipsProductData.quantity}" readonly>
              <button onclick="increaselipsQuantity('${lipsProductData.id}')">+</button></p>
            </div>`;
      const categoryDiv = document.getElementById(
        lipsProductData.category.replace(/\s/g, "_")
      );
      if (categoryDiv) {
        const productContainer = categoryDiv.querySelector(
          `.${lipsProductData.category.replace(/\s/g, "_")}_products`
        );
        if (productContainer) {
          productContainer.appendChild(productDiv);
        }
      }
    }
  }
};

displayLipsProducts();

const clearLipsProductsForm = () => {
  document.getElementById("lipsproductCategory").value = "";
  document.getElementById("LipsproductBrand").value = "";
  document.getElementById("LipsproductPrice").value = "";
  document.getElementById("LipsproductColor").value = "";
  document.getElementById("LipsproductImage").value = "";
};

const increaselipsQuantity = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData) {
    productData.quantity += 1;
    localStorage.setItem(id, JSON.stringify(productData));
    displayLipsProducts();
  }
};

const decreaselipsQuantity = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  if (productData && productData.quantity > 0) {
    productData.quantity -= 1;
    localStorage.setItem(id, JSON.stringify(productData));
    displayLipsProducts();
  }
};

const editLipProduct = (id) => {
  const productData = JSON.parse(localStorage.getItem(id));
  document.getElementById("lipsproductCategory").value = productData.category;
  document.getElementById("LipsproductBrand").value = productData.brand;
  document.getElementById("LipsproductPrice").value = productData.price;
  document.getElementById("LipsproductColor").value = productData.color;
  editLipsProductId = id;

  LipsproductFormContainer.style.display = "block";
};

const deleteLipProduct = (id) => {
  localStorage.removeItem(id);
  displayLipsProducts();
};

document.addEventListener("DOMContentLoaded", displayLipsProducts);

// Make up tools

const ToolsproductFormContainer = document.getElementById(
  "ToolsproductFormContainer"
);
const addNewToolsMakeUp = document.getElementById("addNewToolsMakeUp");
const submitNewToolsProduct = document.getElementById("submitNewToolsProduct");

let editToolsProductId = null;

addNewToolsMakeUp.addEventListener("click", () => {
  if (
    ToolsproductFormContainer.style.display === "none" ||
    ToolsproductFormContainer.style.display === ""
  ) {
    ToolsproductFormContainer.style.display = "block";
  } else {
    ToolsproductFormContainer.style.display = "none";
    clearToolsProductsForm();
  }
});

submitNewToolsProduct.addEventListener("click", () => {
  const category = document.getElementById("ToolsproductCategory").value;
  const brand = document.getElementById("ToolsproductBrand").value;
  const price = document.getElementById("ToolsproductPrice").value;
  const color = document.getElementById("ToolsproductColor").value;
  const image = document.getElementById("ToolsproductImage").files[0];

  if (category && brand && price && color && image) {
    if (image.size > 50 * 1024) {
      alert("File size must be 40KB");
      return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const ToolsProductData = {
        id: editToolsProductId
          ? editToolsProductId
          : "tools_" + new Date().getTime(),
        category: category,
        brand: brand,
        color: color,
        price: price,
        image: imageSrc,
        quantity: editToolsProductId
          ? JSON.parse(localStorage.getItem(editToolsProductId)).quantity
          : 0,
      };

      localStorage.setItem(
        ToolsProductData.id,
        JSON.stringify(ToolsProductData)
      );
      editToolsProductId = null;
      displayToolsProducts();
      clearToolsProductsForm();

      ToolsproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill the all information");
  }
});

const displayToolsProducts = () => {
  const categories = [
    "Makeup_Brushes",
    "Beauty_Blender",
    "Tweezers",
    "Makeup_Remover",
    "Makeup_Brush_Cleaner",
  ];

  categories.forEach((category) => {
    const categoryDiv = document.getElementById(category);
    if (categoryDiv) {
      const productDiv = categoryDiv.querySelector(`.${category}_products`);
      if (productDiv) {
        productDiv.innerHTML = "";
      }
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("tools_")) {
      const toolsProductData = JSON.parse(localStorage.getItem(key));
      const toolsProductDiv = document.createElement("div");
      toolsProductDiv.className = "tools_product";
      toolsProductDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
      <button 
      onclick="editToolsProduct('${toolsProductData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #ffb74d">
      edit
      </span></button>
      <button 
      onclick="deleteToolsProduct('${toolsProductData.id}')"
      style="
      display: flex;
      align-items: center;
      justify-content: center;
      "
      ><span class="material-symbols-outlined" style="color: #f44336">
      delete
      </span></button>
      </div>
            <img src="${toolsProductData.image}" alt="${toolsProductData.brand}">
            <div class="quantity">
              <p>Brand : ${toolsProductData.brand}</p>
              <p>Price : ${toolsProductData.price}</p>
              <p>Color : ${toolsProductData.color}</p>
              <p>Quantity : <button onclick="decreaseToolsQuantity('${toolsProductData.id}')">-</button>
              <input type="number" value="${toolsProductData.quantity}" readonly>
              <button onclick="increaseToolsQuantity('${toolsProductData.id}')">+</button></p>
            </div>
        `;
      const categoryDiv = document.getElementById(toolsProductData.category);
      if (categoryDiv) {
        const productToolsContainer = categoryDiv.querySelector(
          `.${toolsProductData.category}_products`
        );
        if (productToolsContainer) {
          productToolsContainer.appendChild(toolsProductDiv);
        }
      }
    }
  }
};

displayToolsProducts();

const editToolsProduct = (id) => {
  const toolsProductData = JSON.parse(localStorage.getItem(id));
  document.getElementById("ToolsproductCategory").value =
    toolsProductData.category;
  document.getElementById("ToolsproductBrand").value = toolsProductData.brand;
  document.getElementById("ToolsproductPrice").value = toolsProductData.price;
  document.getElementById("ToolsproductColor").value = toolsProductData.color;
  document.getElementById("ToolsproductImage").files[0] =
    toolsProductData.image;
  editToolsProductId = id;

  ToolsproductFormContainer.style.display = "block";
};

const deleteToolsProduct = (id) => {
  localStorage.removeItem(id);
  displayToolsProducts();
};

const increaseToolsQuantity = (id) => {
  const toolsProductData = JSON.parse(localStorage.getItem(id));
  if (toolsProductData) {
    toolsProductData.quantity += 1;
    localStorage.setItem(id, JSON.stringify(toolsProductData));
    displayToolsProducts();
  }
};

const decreaseToolsQuantity = (id) => {
  const toolsProductData = JSON.parse(localStorage.getItem(id));
  if (toolsProductData && toolsProductData.quantity > 0) {
    toolsProductData.quantity -= 1;
    localStorage.setItem(id, JSON.stringify(toolsProductData));
    displayToolsProducts();
  }
};

const clearToolsProductsForm = () => {
  document.getElementById("ToolsproductCategory").value = "";
  document.getElementById("ToolsproductBrand").value = "";
  document.getElementById("ToolsproductPrice").value = "";
  document.getElementById("ToolsproductColor").value = "";
  document.getElementById("ToolsproductImage").value = "";
};

document.addEventListener("DOMContentLoaded", displayToolsProducts);
