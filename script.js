//VARIABLES
const addBtn = document.querySelector("#addBtn");
const addField = document.querySelector("#addField");
const resetBtn = document.querySelector("#resetBtn");

const myList = document.querySelector("#myList");
const todo = document.querySelectorAll("#todo");
let lis = document.querySelectorAll("li");

let todos = [];

//EVENT LISTENERS
addBtn.addEventListener("click", () => {
  addToList();
  startListener();
});
resetBtn.addEventListener("click", () => {
  resetList();
});
for (let i = 0; i < todos.length; i++) {}

//FUNCTIONS
addToList = () => {
  let newLiText = addField.value;
  if (newLiText) {
    let newLi = document.createElement("li");

    let newP = document.createElement("p");
    newP.append(document.createTextNode(newLiText));
    newP.setAttribute("class", "info");

    let newBtn = document.createElement("i");
    newBtn.setAttribute("class", "far fa-times-circle box");
    newBtn.onclick = () => {
      newBtn.parentElement.parentElement.removeChild(newLi);
    };

    //Appending elements to list item within UL
    newLi.append(newP);
    newLi.append(newBtn);
    myList.append(newLi);

    todos.push(newLiText); //ADD TO ARRAY
    //LOGGING
    console.log(`- Added \"${newLiText}\" to list.`);
    console.log(`To do list: ${todos}`);
  } else {
    console.error("FIELD EMPTY!");
  }
};

resetList = () => {
  if (todos.length > 0) {
    myList.innerHTML = "";

    todos = [];

    console.log(`- List reset`);
  } else {
    console.error("LIST ALREADY EMPTY");
  }
};

startListener = () => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", () => {
      console.log("li clicked");
    });
  }
};
