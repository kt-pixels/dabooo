const addLipstics = document.getElementById("addLipstics");
const add_lipstics_form = document.getElementById("add_lipstics_form");

const saveLipstics = document.getElementById("saveLipstics");
const category_lips = document.getElementById("category_lips");

let editLipsticsId = null

addLipstics.addEventListener("click", function () {
  if (
    add_lipstics_form.style.display === "none" ||
    add_lipstics_form.style.display === ""
  ) {
    add_lipstics_form.style.display = "flex";
  } else {
    add_lipstics_form.style.display = "none";
  }
});

saveLipstics.addEventListener("click", function () {
  const lipsticBrand = document.getElementById("lipsticCat").value;
  const lipsticPrice = document.getElementById("lipsticPrice").value;
  const lipsticColor = document.getElementById("lipsticColor").value;
  const lipsticImage = document.getElementById("lipsticsImage").files[0];

  if (lipsticBrand && lipsticPrice && lipsticImage && lipsticColor) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const lipsticImages = event.target.result;

      const lipsticsData = {
        id: editLipsticsId ? editLipsticsId : "lipstics_" + new Date().getTime(),
        brand: lipsticBrand,
        price: lipsticPrice,
        color: lipsticColor,
        image: lipsticImages,
        quantity: 0,
      };

      localStorage.setItem(lipsticsData.id, JSON.stringify(lipsticsData));
      editLipsticsId = null
      displayLipstics();
      clearLipsticForm();

      add_lipstics_form.style.display = "none";
    };

    reader.readAsDataURL(lipsticImage);
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayLipstics = () => {
  category_lips.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("lipstics_")) {
      const lipsticsData = JSON.parse(localStorage.getItem(key));
      const cat_lipstics_div = document.createElement("div");
      cat_lipstics_div.className = "lipstics";

      cat_lipstics_div.innerHTML = `
      <div class="edit_dlt">
      <button onclick="editLipstics('${lipsticsData.id}')">Edit</button>
      <button onclick="deleteLipstics('${lipsticsData.id}')">Delete</button>
      </div>
          <img src="${lipsticsData.image}" alt="" />
          <p class="brand">${lipsticsData.brand}</p>
          <p class="clr">Color : ${lipsticsData.color}</p>
          <p class="amt">Price : $${lipsticsData.price}</p>
          <div>
            <p>Quantity</p>
            <button id="decreaseBtn" onclick="decreaseQuantity('${lipsticsData.id}')">-</button>
            <input type="number" id="quantity_${lipsticsData.id}" value="${lipsticsData.quantity}" readonly />
            <button id="increaseBtn" onclick="increaseQuantity('${lipsticsData.id}')">+</button>
          </div>
            `;
      category_lips.appendChild(cat_lipstics_div);
    }
  }
};

displayLipstics();

const increaseQuantity = (id) => {
  const lipsticsData = JSON.parse(localStorage.getItem(id));
  if (lipsticsData) {
    lipsticsData.quantity += 1;
    document.getElementById(`quantity_${id}`).value = lipsticsData.quantity;
    localStorage.setItem(id, JSON.stringify(lipsticsData));
  }
};

const decreaseQuantity = (id) => {
  const lipsticsData = JSON.parse(localStorage.getItem(id));
  if (lipsticsData && lipsticsData.quantity > 0) {
    lipsticsData.quantity -= 1;
    document.getElementById(`quantity_${id}`).value = lipsticsData.quantity;
    localStorage.setItem(id, JSON.stringify(lipsticsData));
  }
};

const clearLipsticForm = () => {
  document.getElementById("lipsticCat").value = "";
  document.getElementById("lipsticPrice").value = "";
  document.getElementById("lipsticColor").value = "";
  document.getElementById("lipsticsImage").value = "";
};

document.addEventListener("DOMContentLoaded", displayLipstics);

const editLipstics = (id) => {
    const lipsticsData = JSON.parse(localStorage.getItem(id))
    if(lipsticsData){
        document.getElementById('lipsticCat').value = lipsticsData.brand
        document.getElementById('lipsticPrice').value = lipsticsData.price
        document.getElementById('lipsticColor').value = lipsticsData.color
        document.getElementById('lipsticsImage').files[0] = lipsticsData.image
        editLipsticsId = id 
      add_lipstics_form.style.display = "flex";
    }
}

const deleteLipstics = (id) => {
    localStorage.removeItem(id)
    displayLipstics()
}