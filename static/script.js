function redirect() {
  let searchTxt = document.querySelector("#searchTxt").value;
  searchTxt = searchTxt.replace(" ", "-");
  location.replace("https://butterfly-conservation.org/moths/" + searchTxt);
}

const canvas = document.querySelector(".campo");
const lamp = document.getElementById("lampimg");

const locatelamp = function () {
  console.log(canvas.offsetHeight);
  console.log(canvas.offsetWidth);
  lamp.style.left = getRandomNumber(0, canvas.offsetWidth) + "px";
  lamp.style.top = getRandomNumber(0, canvas.offsetHeight) + "px";
};

locatelamp();
lamp.addEventListener("click", locatelamp);

const moth = document.getElementById("moth");
const onMouseMove = (e) => {
  mothimg.style.left = e.pageX + "px";
  mothimg.style.top = e.pageY + "px";
};

function mouseOut() {
  console.log("mouseout")
}

canvas.addEventListener("mouseover", onMouseMove);
canvas.addEventListener("mouseout", mouseOut);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
