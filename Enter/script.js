var area = document.getElementById("area");

function enter() {
  var name = prompt("What's your name?");
  if (name === "" || name === null) {
    alert("Something went wrong...");
    area.innerHTML = "Click on the button to access...";
  } else {
    area.innerHTML = "Welcome " + name + " ";
    let exitBtn = document.createElement("button");
    exitBtn.innerText = "Exit the account";
    exitBtn.onclick = exit;
    area.appendChild(exitBtn);
  }
}

function exit() {
  alert("Bye!");
  area.innerHTML = "You've logged out. ";
}

function grades(grade1, grade2) {
  let gpa = (grade1 + grade2) / 2;
  if (gpa >= 7) {
    console.log("You passed! " + gpa);
  } else if (gpa < 7) {
    console.log("You failed! " + gpa);
  }
}

function student(name, course) {
  var message = "Welcome " + name + " to the " + course + " course!";
  console.log(message);
}
