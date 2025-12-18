let loaderElem;
let slides;
let current = 0;
let slideTimer; // 타이머 관리용

function setElems() {
  loaderElem = document.querySelector(".loader-wrapper");
  slides = document.querySelectorAll(".fade-slider img");
}

function startSlider() {
  if (slides.length < 2) return; // 이미지 4개면 정상 작동

  // 4초마다 실행
  slideTimer = setInterval(() => {
    // 1. 현재 이미지에서 active 제거
    slides[current].classList.remove("active");

    // 2. 다음 인덱스로 이동 (0, 1, 2, 3 순환)
    current = (current + 1) % slides.length;

    // 3. 다음 이미지에 active 추가
    slides[current].classList.add("active");
  }, 2000);
}

window.addEventListener("load", () => {
  setElems();

  // 로더 제거
  loaderElem.addEventListener("transitionend", function () {
    this.remove();
  });
  document.body.classList.remove("before-load");

  // 슬라이더 시작
  startSlider();
});

// 메뉴 토글 (기존 코드 유지)
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
