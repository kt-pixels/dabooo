const addPursesBtn = document.getElementById("addPurses_btn");
const addPursesForm = document.getElementById("PursesFormContainer");
const savePursesDetailsBtn = document.getElementById("submitNewPurse");

const allPursesDiv = document.getElementById("All_purses");

let editPurseId = null;

addPursesBtn.addEventListener("click", () => {
  if (
    addPursesForm.style.display === "none" ||
    addPursesForm.style.display === ""
  ) {
    addPursesForm.style.display = "block";
  } else {
    addPursesForm.style.display = "none";
  }
});

savePursesDetailsBtn.addEventListener("click", () => {
  const pursePrice = document.getElementById("PursePrice").value;
  const purseImageFile = document.getElementById("PurseImage").files[0];

  if (pursePrice && purseImageFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const purseImages = event.target.result;
      const purseData = {
        id: editPurseId ? editPurseId : "purses_" + new Date().getTime(),
        price: pursePrice,
        image: purseImages,
      };

      localStorage.setItem(purseData.id, JSON.stringify(purseData));
      editPurseId = null;
      displayPurseData();

      clearPurseForm();
    };
    reader.readAsDataURL(purseImageFile);

    addPursesForm.style.display = "none";
  } else {
    alert("Please fill in all the required fields.");
  }
});

const displayPurseData = () => {
  allPursesDiv.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("purses_")) {
      const purseData = JSON.parse(localStorage.getItem(key));
      const purseDiv = document.createElement("div");
      purseDiv.className = "purse_product";

      purseDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
        <button 
        onclick="editPurses('${purseData.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #ffb74d">
        edit
        </span></button>
        <button 
        onclick="deletePurses('${purseData.id}')"
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        "
        ><span class="material-symbols-outlined" style="color: #f44336">
        delete
        </span></button>
        </div>
            <img src="${purseData.image}" alt="" />
          <div>
            <p>Price : Rs.${purseData.price}</p>
          </div>
            `;

      allPursesDiv.appendChild(purseDiv);
    }
  }
};

displayPurseData();

const editPurses = (id) => {
  const purseData = JSON.parse(localStorage.getItem(id));
  if (purseData) {
    document.getElementById("PursePrice").value = purseData.price;
    editPurseId = id;
    addPursesForm.style.display = "block";
  }
};

const deletePurses = (id) => {
  localStorage.removeItem(id);
  displayPurseData();
};

const clearPurseForm = () => {
  document.getElementById("PursePrice").value = "";
  document.getElementById("PurseImage").value = "";
};
