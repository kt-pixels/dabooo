const addPursesBtn = document.getElementById("addPurses");
const addPursesForm = document.getElementById("add_purses_form");
const savePursesDetailsBtn = document.getElementById("savePurses");

const allPursesDiv = document.getElementById("all_purses");

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
  const purseColor = document.getElementById("purseColor").value;
  const pursePrice = document.getElementById("pursePrice").value;
  const purseImageFile = document.getElementById("purseImage").files[0];

  if (purseColor && pursePrice && purseImageFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const purseImages = event.target.result;
      const purseData = {
        id: editPurseId ? editPurseId : "purses_" + new Date().getTime(),
        color: purseColor,
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
      purseDiv.className = "purse";

      purseDiv.innerHTML = `
            <img src="${purseData.image}" alt="" />
          <div>
            <p>Color : ${purseData.color}</p>
            <p>Price : $${purseData.price}</p>
          </div>
          <div>
            <button onClick="editPurses('${purseData.id}')">Edit</button>
            <button onClick="deletePurses('${purseData.id}')">Delete</button>
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
    document.getElementById("purseColor").value = purseData.color;
    document.getElementById("pursePrice").value = purseData.price;
    document.getElementById("purseImage").files[0] = purseData.image;
    editPurseId = id;
    addPursesForm.style.display = "block";
  }
};

const deletePurses = (id) => {
  localStorage.removeItem(id);
  displayPurseData();
};

const clearPurseForm = () => {
  document.getElementById("purseColor").value = "";
  document.getElementById("pursePrice").value = "";
  document.getElementById("purseImage").value = "";
};
