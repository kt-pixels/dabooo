const addNewSkinCare = document.getElementById("addNewSkinCare");
const SkincareproductFormContainer = document.getElementById(
  "SkincareproductFormContainer"
);
const submitNewSkinCareProduct = document.getElementById(
  "submitNewSkinCareProduct"
);

let editSkinCareId = null;

// Display or hide the form
addNewSkinCare.addEventListener("click", () => {
  if (
    SkincareproductFormContainer.style.display === "none" ||
    SkincareproductFormContainer.style.display === ""
  ) {
    SkincareproductFormContainer.style.display = "block";
  } else {
    SkincareproductFormContainer.style.display = "none";
  }
});

submitNewSkinCareProduct.addEventListener("click", () => {
  const category = document.getElementById("SkinCareproductCategory").value;
  const brand = document.getElementById("SkinCareproductBrand").value;
  const price = document.getElementById("SkinCareproductPrice").value;
  const color = document.getElementById("SkinCareproductColor").value;
  const image = document.getElementById("SkinCareproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const SkinCareProductData = {
        id: editSkinCareId ? editSkinCareId : "skinCare_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editSkinCareId ? JSON.parse(localStorage.getItem(editSkinCareId)).quantity : 0,
      };

      localStorage.setItem(SkinCareProductData.id, JSON.stringify(SkinCareProductData));
      editSkinCareId = null;
      displaySkinCareProducts();
      clearSkinProductsForm();

      SkincareproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displaySkinCareProducts = () => {
  const categories = [
    "Cleanser",
    "Toner",
    "Moisturizer",
    "Serum",
    "Face_Oil",
    "Sunscreen",
    "Face_Mask",
    "Eye_Cream",
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


  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    if (key.startsWith("skinCare_")) {
        const skincareproductsdata = JSON.parse(localStorage.getItem(key));
        const skinproductcontainer = document.createElement("div");
        skinproductcontainer.className = "SkinCare_product";
  
        skinproductcontainer.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
        <button 
        onclick="editSkinProduct('${skincareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #ffb74d">
        edit
        </span></button>
        <button 
        onclick="deleteSkinProduct('${skincareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #f44336">
        delete
        </span></button>
        </div>
              <img src="${skincareproductsdata.image}" alt="${skincareproductsdata.brand}">
              <div class="quantity">
                <p>Brand : ${skincareproductsdata.brand}</p>
                <p>Price : ${skincareproductsdata.price}</p>
                <p>Color : ${skincareproductsdata.color}</p>
                <p>Quantity : <button onclick="decreaseSproQuantity('${skincareproductsdata.id}')">-</button>
                <input type="number" value="${skincareproductsdata.quantity}" readonly>
                <button onclick="increaseSproQuantity('${skincareproductsdata.id}')">+</button></p>
              </div>
              `;
  
        const categoryDiv = document.getElementById(
          skincareproductsdata.category
        );
        if (categoryDiv) {
          const productContainer = categoryDiv.querySelector(
            `.${skincareproductsdata.category}_products`
          );
          if (productContainer) {
            productContainer.appendChild(skinproductcontainer);
          }
        }
        // cursor.continue();
      }
  }
  };


function clearSkinProductsForm() {
  document.getElementById("SkinCareproductCategory").value = "";
  document.getElementById("SkinCareproductBrand").value = "";
  document.getElementById("SkinCareproductPrice").value = "";
  document.getElementById("SkinCareproductColor").value = "";
  document.getElementById("SkinCareproductImage").value = "";
}

function increaseSproQuantity(id) {
  const skincareproductsdata = JSON.parse(localStorage.getItem(id))
  if(skincareproductsdata){
    skincareproductsdata.quantity += 1
    localStorage.setItem(id, JSON.stringify(skincareproductsdata))
    displaySkinCareProducts()
  }
}

function decreaseSproQuantity(id) {
    const skincareproductsdata = JSON.parse(localStorage.getItem(id))
    if(skincareproductsdata && skincareproductsdata.quantity > 0){
      skincareproductsdata.quantity -= 1
      localStorage.setItem(id, JSON.stringify(skincareproductsdata))
      displaySkinCareProducts()
    }
}

function editSkinProduct(id) {
    const productData = JSON.parse(localStorage.getItem(id))
    document.getElementById("SkinCareproductCategory").value = productData.category;
    document.getElementById("SkinCareproductBrand").value = productData.brand;
    document.getElementById("SkinCareproductPrice").value = productData.price;
    document.getElementById("SkinCareproductColor").value = productData.color;
    editSkinCareId = id;

    SkincareproductFormContainer.style.display = "block";
  };

function deleteSkinProduct(id) {
  localStorage.removeItem(id)
  displaySkinCareProducts()
}

document.addEventListener("DOMContentLoaded", displaySkinCareProducts);


// HAIR CARE

const addNewHairCare = document.getElementById("addNewHairCare");
const HaircareproductFormContainer = document.getElementById(
  "HaircareproductFormContainer"
);
const submitNewHairCareProduct = document.getElementById(
  "submitNewHairCareProduct"
);

let editHairCareId = null;

// Display or hide the form
addNewHairCare.addEventListener("click", () => {
  if (
    HaircareproductFormContainer.style.display === "none" ||
    HaircareproductFormContainer.style.display === ""
  ) {
    HaircareproductFormContainer.style.display = "block";
  } else {
    HaircareproductFormContainer.style.display = "none";
  }
});

submitNewHairCareProduct.addEventListener("click", () => {
  const category = document.getElementById("HairCareproductCategory").value;
  const brand = document.getElementById("HairCareproductBrand").value;
  const price = document.getElementById("HairCareproductPrice").value;
  const color = document.getElementById("HairCareproductColor").value;
  const image = document.getElementById("HairCareproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const HairCareProductData = {
        id: editHairCareId ? editHairCareId : "hairCare_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editHairCareId ? JSON.parse(localStorage.getItem(editHairCareId)).quantity : 0,
      };

      localStorage.setItem(HairCareProductData.id, JSON.stringify(HairCareProductData));
      editHairCareId = null;
      displayHairCareProducts();
      clearHairProductsForm();

      HaircareproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayHairCareProducts = () => {
  const categories = [
    "Shampoo",
    "Conditioner",
    "Hair_Oil",
    "Hair_Color",
    "Hair_Serum",
    "Hair_Spray",
    "Dry_Shampoo",
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


  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    if (key.startsWith("hairCare_")) {
        const haircareproductsdata = JSON.parse(localStorage.getItem(key));
        const hairproductcontainer = document.createElement("div");
        hairproductcontainer.className = "HairCare_product";
  
        hairproductcontainer.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
        <button 
        onclick="editHairProduct('${haircareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #ffb74d">
        edit
        </span></button>
        <button 
        onclick="deleteHairProduct('${haircareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #f44336">
        delete
        </span></button>
        </div>
              <img src="${haircareproductsdata.image}" alt="${haircareproductsdata.brand}">
              <div class="quantity">
                <p>Brand : ${haircareproductsdata.brand}</p>
                <p>Price : ${haircareproductsdata.price}</p>
                <p>Color : ${haircareproductsdata.color}</p>
                <p>Quantity : <button onclick="decreaseHproQuantity('${haircareproductsdata.id}')">-</button>
                <input type="number" value="${haircareproductsdata.quantity}" readonly>
                <button onclick="increaseHproQuantity('${haircareproductsdata.id}')">+</button></p>
              </div>
              `;
  
        const categoryDiv = document.getElementById(
          haircareproductsdata.category
        );
        if (categoryDiv) {
          const productContainer = categoryDiv.querySelector(
            `.${haircareproductsdata.category}_products`
          );
          if (productContainer) {
            productContainer.appendChild(hairproductcontainer);
          }
        }
        // cursor.continue();
      }
  }
  };


function clearHairProductsForm() {
  document.getElementById("HairCareproductCategory").value = "";
  document.getElementById("HairCareproductBrand").value = "";
  document.getElementById("HairCareproductPrice").value = "";
  document.getElementById("HairCareproductColor").value = "";
  document.getElementById("HairCareproductImage").value = "";
}

function increaseHproQuantity(id) {
  const haircareproductsdata = JSON.parse(localStorage.getItem(id))
  if(haircareproductsdata){
    haircareproductsdata.quantity += 1
    localStorage.setItem(id, JSON.stringify(haircareproductsdata))
    displayHairCareProducts()
  }
}

function decreaseHproQuantity(id) {
    const haircareproductsdata = JSON.parse(localStorage.getItem(id))
    if(haircareproductsdata && haircareproductsdata.quantity > 0){
      haircareproductsdata.quantity -= 1
      localStorage.setItem(id, JSON.stringify(haircareproductsdata))
      displayHairCareProducts()
    }
}

function editHairProduct(id) {
    const productData = JSON.parse(localStorage.getItem(id))
    document.getElementById("HairCareproductCategory").value = productData.category;
    document.getElementById("HairCareproductBrand").value = productData.brand;
    document.getElementById("HairCareproductPrice").value = productData.price;
    document.getElementById("HairCareproductColor").value = productData.color;
    editHairCareId = id;

    HaircareproductFormContainer.style.display = "block";
  };

function deleteHairProduct(id) {
  localStorage.removeItem(id)
  displayHairCareProducts()
}

document.addEventListener("DOMContentLoaded", displayHairCareProducts);



// BODY CARE PRODUCTS CODE

const addNewBodyCare = document.getElementById("addNewBodyCare");
const BodycareproductFormContainer = document.getElementById(
  "BodycareproductFormContainer"
);
const submitNewBodyCareProduct = document.getElementById(
  "submitNewBodyCareProduct"
);

let editBodyCareId = null;

// Display or hide the form
addNewBodyCare.addEventListener("click", () => {
  if (
    BodycareproductFormContainer.style.display === "none" ||
    BodycareproductFormContainer.style.display === ""
  ) {
    BodycareproductFormContainer.style.display = "block";
  } else {
    BodycareproductFormContainer.style.display = "none";
  }
});

submitNewBodyCareProduct.addEventListener("click", () => {
  const category = document.getElementById("BodyCareproductCategory").value;
  const brand = document.getElementById("BodyCareproductBrand").value;
  const price = document.getElementById("BodyCareproductPrice").value;
  const color = document.getElementById("BodyCareproductColor").value;
  const image = document.getElementById("BodyCareproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const BodyCareProductData = {
        id: editBodyCareId ? editBodyCareId : "bodyCare_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editBodyCareId ? JSON.parse(localStorage.getItem(editBodyCareId)).quantity : 0,
      };

      localStorage.setItem(BodyCareProductData.id, JSON.stringify(BodyCareProductData));
      editBodyCareId = null;
      displayBodyCareProducts();
      clearBodyProductsForm();

      BodycareproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayBodyCareProducts = () => {
  const categories = [
    "Body_Wash",
    "Body_Lotion",
    "Body_Scrub",
    "Body_Butter",
    "Hand_Cream",
    "Foot_Cream",
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


  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    if (key.startsWith("bodyCare_")) {
        const bodycareproductsdata = JSON.parse(localStorage.getItem(key));
        const bodyproductcontainer = document.createElement("div");
        bodyproductcontainer.className = "BodyCare_product";
  
        bodyproductcontainer.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
        <button 
        onclick="editBodyProduct('${bodycareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #ffb74d">
        edit
        </span></button>
        <button 
        onclick="deleteBodyProduct('${bodycareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #f44336">
        delete
        </span></button>
        </div>
              <img src="${bodycareproductsdata.image}" alt="${bodycareproductsdata.brand}">
              <div class="quantity">
                <p>Brand : ${bodycareproductsdata.brand}</p>
                <p>Price : ${bodycareproductsdata.price}</p>
                <p>Color : ${bodycareproductsdata.color}</p>
                <p>Quantity : <button onclick="decreaseBproQuantity('${bodycareproductsdata.id}')">-</button>
                <input type="number" value="${bodycareproductsdata.quantity}" readonly>
                <button onclick="increaseBproQuantity('${bodycareproductsdata.id}')">+</button></p>
              </div>
              `;
  
        const categoryDiv = document.getElementById(
          bodycareproductsdata.category
        );
        if (categoryDiv) {
          const productContainer = categoryDiv.querySelector(
            `.${bodycareproductsdata.category}_products`
          );
          if (productContainer) {
            productContainer.appendChild(bodyproductcontainer);
          }
        }
        // cursor.continue();
      }
  }
  };


function clearBodyProductsForm() {
  document.getElementById("BodyCareproductCategory").value = "";
  document.getElementById("BodyCareproductBrand").value = "";
  document.getElementById("BodyCareproductPrice").value = "";
  document.getElementById("BodyCareproductColor").value = "";
  document.getElementById("BodyCareproductImage").value = "";
}

function increaseBproQuantity(id) {
  const bodycareproductsdata = JSON.parse(localStorage.getItem(id))
  if(bodycareproductsdata){
    bodycareproductsdata.quantity += 1
    localStorage.setItem(id, JSON.stringify(bodycareproductsdata))
    displayBodyCareProducts()
  }
}

function decreaseBproQuantity(id) {
    const bodycareproductsdata = JSON.parse(localStorage.getItem(id))
    if(bodycareproductsdata && bodycareproductsdata.quantity > 0){
      bodycareproductsdata.quantity -= 1
      localStorage.setItem(id, JSON.stringify(bodycareproductsdata))
      displayBodyCareProducts()
    }
}

function editBodyProduct(id) {
    const productData = JSON.parse(localStorage.getItem(id))
    document.getElementById("BodyCareproductCategory").value = productData.category;
    document.getElementById("BodyCareproductBrand").value = productData.brand;
    document.getElementById("BodyCareproductPrice").value = productData.price;
    document.getElementById("BodyCareproductColor").value = productData.color;
    editBodyCareId = id;

    BodycareproductFormContainer.style.display = "block";
  };

function deleteBodyProduct(id) {
  localStorage.removeItem(id)
  displayBodyCareProducts()
}

document.addEventListener("DOMContentLoaded", displayBodyCareProducts);



// NAIL CARE PRODUCTS
const addNewNailCare = document.getElementById("addNewNailCare");
const NailcareproductFormContainer = document.getElementById(
  "NailcareproductFormContainer"
);
const submitNewNailCareProduct = document.getElementById(
  "submitNewNailCareProduct"
);

let editNailCareId = null;

// Display or hide the form
addNewNailCare.addEventListener("click", () => {
  if (
    NailcareproductFormContainer.style.display === "none" ||
    NailcareproductFormContainer.style.display === ""
  ) {
    NailcareproductFormContainer.style.display = "block";
  } else {
    NailcareproductFormContainer.style.display = "none";
  }
});

submitNewNailCareProduct.addEventListener("click", () => {
  const category = document.getElementById("NailCareproductCategory").value;
  const brand = document.getElementById("NailCareproductBrand").value;
  const price = document.getElementById("NailCareproductPrice").value;
  const color = document.getElementById("NailCareproductColor").value;
  const image = document.getElementById("NailCareproductImage").files[0];

  if (category && brand && price && color && image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageSrc = event.target.result;
      const NailCareProductData = {
        id: editNailCareId ? editNailCareId : "nailCare_" + new Date().getTime(),
        category: category,
        brand: brand,
        price: price,
        color: color,
        image: imageSrc,
        quantity: editNailCareId ? JSON.parse(localStorage.getItem(editNailCareId)).quantity : 0,
      };

      localStorage.setItem(NailCareProductData.id, JSON.stringify(NailCareProductData));
      editNailCareId = null;
      displayNailCareProducts();
      clearNailProductsForm();

      NailcareproductFormContainer.style.display = "none";
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayNailCareProducts = () => {
  const categories = [
    "Nail_Polish",
    "Nail_Polish_Remover",
    "Nail_Clippers",
    "Nail_File",
    "Cuticle_Oil",
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


  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    if (key.startsWith("nailCare_")) {
        const nailcareproductsdata = JSON.parse(localStorage.getItem(key));
        const nailproductcontainer = document.createElement("div");
        nailproductcontainer.className = "BodyCare_product";
  
        nailproductcontainer.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
        <button 
        onclick="editNailProduct('${nailcareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #ffb74d">
        edit
        </span></button>
        <button 
        onclick="deleteNailProduct('${nailcareproductsdata.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #f44336">
        delete
        </span></button>
        </div>
              <img src="${nailcareproductsdata.image}" alt="${nailcareproductsdata.brand}">
              <div class="quantity">
                <p>Brand : ${nailcareproductsdata.brand}</p>
                <p>Price : ${nailcareproductsdata.price}</p>
                <p>Color : ${nailcareproductsdata.color}</p>
                <p>Quantity : <button onclick="decreaseNproQuantity('${nailcareproductsdata.id}')">-</button>
                <input type="number" value="${nailcareproductsdata.quantity}" readonly>
                <button onclick="increaseNproQuantity('${nailcareproductsdata.id}')">+</button></p>
              </div>
              `;
  
        const categoryDiv = document.getElementById(
          nailcareproductsdata.category
        );
        if (categoryDiv) {
          const productContainer = categoryDiv.querySelector(
            `.${nailcareproductsdata.category}_products`
          );
          if (productContainer) {
            productContainer.appendChild(nailproductcontainer);
          }
        }
        // cursor.continue();
      }
  }
  };


function clearNailProductsForm() {
  document.getElementById("BodyCareproductCategory").value = "";
  document.getElementById("BodyCareproductBrand").value = "";
  document.getElementById("BodyCareproductPrice").value = "";
  document.getElementById("BodyCareproductColor").value = "";
  document.getElementById("BodyCareproductImage").value = "";
}

function increaseNproQuantity(id) {
  const nailcareproductsdata = JSON.parse(localStorage.getItem(id))
  if(nailcareproductsdata){
    nailcareproductsdata.quantity += 1
    localStorage.setItem(id, JSON.stringify(nailcareproductsdata))
    displayNailCareProducts()
  }
}

function decreaseNproQuantity(id) {
    const nailcareproductsdata = JSON.parse(localStorage.getItem(id))
    if(nailcareproductsdata && nailcareproductsdata.quantity > 0){
      nailcareproductsdata.quantity -= 1
      localStorage.setItem(id, JSON.stringify(nailcareproductsdata))
      displayNailCareProducts()
    }
}

function editNailProduct(id) {
    const productData = JSON.parse(localStorage.getItem(id))
    document.getElementById("NailCareproductCategory").value = productData.category;
    document.getElementById("NailCareproductBrand").value = productData.brand;
    document.getElementById("NailCareproductPrice").value = productData.price;
    document.getElementById("NailCareproductColor").value = productData.color;
    editNailCareId = id;

    NailcareproductFormContainer.style.display = "block";
  };

function deleteNailProduct(id) {
  localStorage.removeItem(id)
  displayNailCareProducts()
}

document.addEventListener("DOMContentLoaded", displayNailCareProducts);

