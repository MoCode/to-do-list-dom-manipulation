// get variables
let form = document.querySelector(".task-form");
let taskInput = document.getElementById("input");
let submit = document.querySelector(".btn-submit");
let li = document.querySelectorAll(".collection-item");
let ul = document.querySelector(".collection");
let clearBtn = document.querySelector(".btn-clear");
let filter = document.getElementById("filter");

loadEventListeners();

function loadEventListeners(e) {
  submit.addEventListener("click", addTask);
  ul.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add Task!");
    e.preventDefault();
    return;
  }
  //create list item
  const liNew = document.createElement("li");

  //add class
  liNew.className = "collection-item";

  //textnode and append to li
  liNew.appendChild(document.createTextNode(taskInput.value));

  //create a delete button
  const link = document.createElement("a");
  link.className = "remove-item";
  link.innerHTML = '<i class="fas fa-skull"></i>';
  liNew.appendChild(link);
  ul.appendChild(liNew);
  taskInput.value = "";
  e.preventDefault();
}

function removeTask(e) {
  if (document.querySelectorAll(".fa-skull")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function filterTasks(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(task => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
