let searchBox = document.querySelector(".search-box input");
let addBtn = document.querySelector(".search-box .add-btn");
let listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click", function () {
  if (searchBox.value === "") {
    alert("add minimum one task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = searchBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  searchBox.value = "";
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("active");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();
