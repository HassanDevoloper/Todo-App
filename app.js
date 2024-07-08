var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
// ========== Add Task Function =========
function addTask(event) {
  // ========== If Empty ===============
  if (inputBox.value == "") {
    swal("Please Add Text To Proceed", {
      buttons: false,
      timer: 1800,
    });
  }
  // ========== If Empty ===============

  // ================= if value entered ==========
  else {
    var li = document.createElement("li");
    var date = new Date();
    var hourss = date.getHours().toString();
    if (hourss <= 12) {
      var ampm = "Am";
    } else {
      var ampm = "Pm";
    }
    date = date.toString();
    console.log(hourss);
    var myDate = ` &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b style ="color:#555;font-size:14px;"> ${date.slice(
      0,
      24
    )}:${ampm}</b>`;
    li.innerHTML = inputBox.value + myDate;
    listContainer.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  // ================= if value entered ==========
}
// ========== Add Task Function =========

// ======================== Delete Task Function ===============
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    swal("Are you sure?", {
      dangerMode: true,
      buttons: true,
    });
    e.target.parentElement.remove();
    saveData();
  }
});
// ======================== Delete Task Function ===============

// ====================== Local Storage Saving Date =================
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// ====================== Local Storage Saving Date =================

// =================== local Storage Getting Date ==================
function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();
// =================== local Storage Getting Date ==================