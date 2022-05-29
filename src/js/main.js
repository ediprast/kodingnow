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
