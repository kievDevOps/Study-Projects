let listElement =
  document.querySelector(
    "#app ul"
  ); /* This will define what is going to be accessed, in this case, the unordered list inside the app */
let inputElement =
  document.querySelector(
    "#app input"
  ); /* This will get the input element inside the app */
let buttonElement =
  document.querySelector(
    "#app button"
  ); /* This will get the button element inside the app */

let tasks =
  JSON.parse(localStorage.getItem("@tasklist")) ||
  []; /* Array list for the values to be put inside */

function renderTasks() {
  listElement.innerHTML = "";
  tasks.map((todo) => {
    let liElement = document.createElement("li");
    let taskText = document.createElement(todo);
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    let linkText = document.createTextNode(" Delete");
    linkElement.appendChild(linkText);
    let position = tasks.indexOf(todo);
    linkElement.setAttribute("onclick", `deleteTask(${position})`);
    liElement.appendChild(taskText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });
}

renderTasks();

function addTasks() {
  if (inputElement.value === "") {
    /* If the user leaves the input on blank, the alert below wil popup */
    alert("Type a task");
    return false; /* This makes sure the function stops on it's end */
  } else {
    let newTask =
      inputElement.value; /* This will create a variable that receives the typed element on the input */
    tasks.push(
      newTask
    ); /* This adds the "newTask" into the array list "tasks" */
    inputElement.value = ""; /* This will reset the input to a blank state */
  }
}

buttonElement.onclick = addTasks;

function deleteTask(position) {
  tasks.splice(position, 1);
  renderTasks();
  saveData();
}

function saveData() {
  localStorage.setItem("@tasklist", JSON.stringify(tasks));
}
