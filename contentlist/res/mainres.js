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
