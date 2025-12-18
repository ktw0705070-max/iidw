let loaderElem;

function setElems() {
  loaderElem = document.querySelector(".loader-wrapper");
}

window.addEventListener("load", () => {
  setElems();

  loaderElem.addEventListener("transitionend", function () {
    this.remove();
  });

  document.body.classList.remove("before-load");
});

// const slides = document.querySelectorAll(".fade-slider img");
// let current = 0;

// setInterval(() => {
//   slides[current].classList.remove("active");

//   current = (current + 1) % slides.length;

//   slides[current].classList.add("active");
// }, 4000); // 4초마다 변경
const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

menuToggle.addEventListener("click", () => {
  topNav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1040) {
    topNav.classList.remove("active");
  }
});
