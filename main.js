function blossom() {
  const flowerPetals = document.querySelector(".flower");
  flowerPetals.addEventListener("click", () => {
    document.getElementById("body").style.backgroundImage =
      "url(img/flowerlawn.jpg)";
    document.getElementById("box1background").style.backgroundImage = "none";
    const message = document.getElementById("message");

    message.style.color = "wheat";
    message.style.textShadow = " 1px 1px 1px black";
    message.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    message.style.fontSize = "3rem";
    message.innerHTML = "    How do you like it?";
    const aTags = document.getElementsByTagName("a");
    for (var i = 0; i < aTags.length; i++) {
      aTags[i].style.color = "wheat";
    }
    document.getElementById("special").style.color = "pink";
    const liTags = document.getElementsByTagName("li");
    for (var i = 0; i < liTags.length; i++) {
      liTags[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
  });
}
// healing flower page:

const hibiscus = document.getElementById("hibiscus");
const htext = document.getElementById("hibsicus-text");
hibiscus.addEventListener("click", () => {
  htext.classList.remove("hidden");
});
const dandelion = document.getElementById("dandelion");
const dantext = document.getElementById("dandelion-text");
dandelion.addEventListener("click", () => {
  dantext.classList.remove("hidden");
});

const lavender = document.getElementById("lavender");
const ltext = document.getElementById("lavender-text");
lavender.addEventListener("click", () => {
  ltext.classList.remove("hidden");
});

const honeysuckle = document.getElementById("honeysuckle");
const hotext = document.getElementById("honeysuckle-text");
honeysuckle.addEventListener("click", () => {
  hotext.classList.remove("hidden");
});

const nasturtium = document.getElementById("nasturtium");
const ntext = document.getElementById("nasturtium-text");
nasturtium.addEventListener("click", () => {
  ntext.classList.remove("hidden");
});

const purslane = document.getElementById("purslane");
const ptext = document.getElementById("purslane-text");
purslane.addEventListener("click", () => {
  ptext.classList.remove("hidden");
});

const borage = document.getElementById("borage");
const btext = document.getElementById("borage-text");
borage.addEventListener("click", () => {
  btext.classList.remove("hidden");
});

const rose = document.getElementById("rose");
const rtext = document.getElementById("rose-text");
rose.addEventListener("click", () => {
  rtext.classList.remove("hidden");
});

const kürbis = document.getElementById("kürbis");
const kütext = document.getElementById("kürbis-text");
kürbis.addEventListener("click", () => {
  kütext.classList.remove("hidden");
});
const pansy = document.getElementById("pansy");
const patext = document.getElementById("pansy-text");
pansy.addEventListener("click", () => {
  patext.classList.remove("hidden");
});
const chamomile = document.getElementById("chamomile");
const ctext = document.getElementById("chamomile-text");
chamomile.addEventListener("click", () => {
  ctext.classList.remove("hidden");
});
