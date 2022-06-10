var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1248: {
      slidesPerView: 3,
    },
  },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkwork = document.querySelectorAll(".work-item");

function activeWork() {
  linkwork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkwork.forEach((l) => l.addEventListener("click", activeWork));
