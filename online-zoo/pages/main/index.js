import {
  wrapper,
  overlay,
  burgerBtn,
} from '../../assets/scripts/burger-menu.js';

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

function popup() {
  const card = this.cloneNode(true);
  const closeBtn = burgerBtn.cloneNode(true);
  const cardTop = card.querySelector('.testimonials-card-top');

  document.body.style.overflow = 'hidden';
  overlay.style.zIndex = '2';
  card.classList.add('testimonials-card-popup');
  closeBtn.classList.add('testimonials-card-button');

  cardTop.append(closeBtn);
  wrapper.prepend(overlay);
  overlay.after(card);

  const closePopup = function () {
    document.body.style.overflow = '';
    overlay.style.zIndex = '';
    overlay.remove();
    card.remove();
  };

  closeBtn.onclick = closePopup;
  overlay.onclick = closePopup;
}

window.onload = function () {
  if (document.documentElement.clientWidth < 1000) {
    testimonialsCard.forEach(card => {
      card.addEventListener('click', popup);
    });
  }
};

window.onresize = function () {
  if (
    (document.documentElement.clientWidth > 1550 &&
      document.documentElement.clientWidth < 1600) ||
    (document.documentElement.clientWidth > 950 &&
      document.documentElement.clientWidth < 1000)
  ) {
    location.reload();
  }
};
