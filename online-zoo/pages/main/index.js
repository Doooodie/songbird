const testimonialsCard = document.querySelectorAll('.testimonials-card');
const testimonialsSlider = document.querySelector('.testimonials-slider');

testimonialsSlider.oninput = function () {
  const cardWidth = parseInt(getComputedStyle(testimonialsCard[0]).flexBasis);
  const value = -cardWidth - 30;

  for (let i = +this.min; i <= +this.max; i++) {
    if (i === +this.value) {
      testimonialsCard.forEach(card => {
        card.style.transform = `translateX(${value * i}px)`;
      });
    }
  }
};

window.onresize = function () {
  if (document.documentElement.clientWidth < 1000) {
    testimonialsCard.forEach(card => {
      card.style.transform = `translateX(0px)`;
    });
    testimonialsSlider.value = 0;
  }
};
