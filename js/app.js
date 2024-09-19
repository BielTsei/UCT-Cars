var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var carrousel = document.querySelector(".carrousel");
var list = document.querySelector(".list");
var item = document.querySelectorAll(".item");
var runningTime = document.querySelector(".timeRunning");

let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function () {
  showSlider("next");
};

prevBtn.onclick = function () {
  showSlider("prev");
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
  runningTime.style.animation = "none";
  runningTime.offsetHeight;
  runningTime.style.animation = null;
  runningTime.style.animation = "runningTime 7s linear 1 forwards";
}

function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll(".carrousel .list .item");
  if (type === "next") {
    list.appendChild(sliderItemsDom[0]);
    carrousel.classList.add("next");
  } else {
    list.prepend(sliderItemsDom[sliderItemsDom.lenght - 1]);
    carrousel.classList.add("prev");
  }

  clearTimeout(runTimeOut);

  runTimeOut = setTimeout(() => {
    carrousel.classList.remove("prev");
    carrousel.classList.remove("next");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  resetTimeAnimation();
}

resetTimeAnimation();
