const container = document.querySelector(".container");
container.style.height = "960px";
let contHeight = container.style.height;
container.style.width = "960px";
let contWidth = container.style.width;

const headerLogo = document.querySelector(".header-logo");
const btn = document.querySelector("#erase-button");

let startBoxes = 16;
let numberOfBoxes = 0;

let rndmColor = function () {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
};

//fill container with grid of boxes
let fillContainer = function (numInput) {
  numberOfBoxes = numInput * numInput;
  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "paintBox");
    box.style.backgroundColor = "white";
    let boxHeight = parseInt(contHeight) / parseInt(numInput) - 2 + "px";
    let boxWidth = parseInt(contWidth) / parseInt(numInput) - 2 + "px";
    box.style.height = boxHeight;
    box.style.width = boxWidth;
    box.style.border = "1px solid grey";
    container.appendChild(box);

    //Adds Listener to each created box
    const paintBox = document.querySelectorAll(".paintBox");

    //Randomizes Color of box on hover
    for (let i = 0; i < paintBox.length; i++) {
      paintBox[i].addEventListener("mouseover", () => {
        paintBox[i].style.backgroundColor = rndmColor();
      });
    }
  }
  console.log(numberOfBoxes);
};

//Removes all children appended to container
let emptyContainer = function () {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
};

//Erases grid, creates new grid with new variable
btn.addEventListener("click", () => {
  emptyContainer();
  newBoxNumber = prompt("How many rows/columns of boxes?");
  if (newBoxNumber > 0 && newBoxNumber < 101) {
    fillContainer(newBoxNumber);
  } else {
    alert("Invalid number!");
  }
});

//Fills Grid on first load of page with 16x16
fillContainer(startBoxes);

//Alternative way to use Erase-Button
//using button prompt in HTML
/* let createNewGrid = function(){
    emptyContainer();
    newBoxNumber = prompt("How many rows/columns of boxes?");
  if (newBoxNumber > 0 && newBoxNumber < 101) {
    fillContainer(newBoxNumber);
  } else {
    alert("Invalid number!");
  }
} */

//Reduces brightness filter 10% each time
/* let darkenBox = function () {
  let currentBrightness = paintBox.dataset.brightness;
  currentBrightness = parseInt(currentBrightness) - 10;
  console.log(currentBrightness);
  if (currentBrightness > 0) {
    paintBox.style.filter = `brightness(${currentBrightness}%)`;
  }
}; */

//Testing hover-event: colors the logo for 1000ms after hovering
headerLogo.addEventListener(
  "mouseover",
  () => {
    //event.target.style.color = 'white';
    headerLogo.style.color = "white";

    setTimeout(() => {
      //event.target.style.color = '';
      headerLogo.style.color = "";
    }, 1000);
  },
  false
);
