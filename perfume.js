const turnName = [{ transform: "rotateZ(-360deg)" }];

const turnNameTiming = {
  duration: 2000,
  iterations: 1,
};
const moveName = [{ translate: "110px" }];

const moveNameTiming = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};
const moveOval = [{ translate: "110px" }];

const moveOvalTiming = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};
const button = document.getElementById("turn");
console.log("button", button);
const nameOval = document.getElementById("nameOval");
console.log("nameOval", nameOval);
const oval = document.getElementById("oval");
const pbody = document.getElementById("perfume-body");

button.addEventListener("click", turnText);
function turnText() {
  pbody.style.opacity = "1";
  nameOval.animate(turnName, turnNameTiming);
  setTimeout(function () {
    oval.animate(moveOval, moveOvalTiming);
  }, 3000);
}
