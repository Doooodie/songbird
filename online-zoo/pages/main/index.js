import {
  wrapper,
  overlay,
  burgerBtn,
} from '../../assets/scripts/burger-menu.js';

const petsRowsContainers = document.querySelectorAll('.pets-row-container');
let petsRows = document.querySelectorAll('.pets-cards-row');
const petsCards = document.querySelectorAll('.pets-card');
const petsArrowsLeft = document.querySelectorAll('.pets-left');
const petsArrowsRight = document.querySelectorAll('.pets-right');
let petsCardsLength = petsCards.length;

const testimonialsCard = document.querySelectorAll('.testimonials-card');
const testimonialsSlider = document.querySelector('.testimonials-slider');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function slideLeft() {
  const newCards = [];
  for (let i = 0; i < petsCardsLength; i++) {
    newCards.push(petsCards[i].cloneNode(true));
  }
  shuffle(newCards);

  const topRow = document.createElement('div');
  const bottomRow = document.createElement('div');
  const newRows = [topRow, bottomRow];

  let splitValue = 3;
  if (petsCardsLength === 4) splitValue = 2;

  newRows.forEach(row => {
    row.classList.add('pets-cards-row');
  });
  newCards.forEach((card, i) => {
    if (i < splitValue) topRow.append(card);
    else bottomRow.append(card);
  });

  petsRowsContainers.forEach((container, i) => {
    container.append(newRows[i]);
    petsRows[i].style.transform = `translateX(-1192px)`;

    petsRows[i].addEventListener('transitionstart', () => {
      newRows[i].style.transform = `translateX(1192px)`;
      petsArrowsLeft.forEach(arrow => {
        arrow.removeEventListener('click', slideLeft);
      });
      petsArrowsRight.forEach(arrow => {
        arrow.removeEventListener('click', slideRight);
      });
      setTimeout(() => {
        petsArrowsLeft.forEach(arrow => {
          arrow.addEventListener('click', slideLeft);
        });
        petsArrowsRight.forEach(arrow => {
          arrow.addEventListener('click', slideRight);
        });
      }, 1000);
    });

    petsRows[i].addEventListener('transitionend', event => {
      newRows[i].style.transform = `translateX(0)`;
      event.target.remove();
    });
  });

  petsRows = newRows;
}

function slideRight() {
  const newCards = [];
  for (let i = 0; i < petsCardsLength; i++) {
    newCards.push(petsCards[i].cloneNode(true));
  }
  shuffle(newCards);

  const topRow = document.createElement('div');
  const bottomRow = document.createElement('div');
  const newRows = [topRow, bottomRow];

  let splitValue = 3;
  if (petsCardsLength === 4) splitValue = 2;

  newRows.forEach(row => {
    row.classList.add('pets-cards-row');
    row.style.transform = `translateX(-2384px)`;
  });
  newCards.forEach((card, i) => {
    if (i < splitValue) topRow.append(card);
    else bottomRow.append(card);
  });

  petsRowsContainers.forEach((container, i) => {
    container.append(newRows[i]);
    petsRows[i].style.transform = `translateX(1192px)`;

    petsRows[i].addEventListener('transitionstart', () => {
      petsArrowsLeft.forEach(arrow => {
        arrow.removeEventListener('click', slideLeft);
      });
      petsArrowsRight.forEach(arrow => {
        arrow.removeEventListener('click', slideRight);
      });
      setTimeout(() => {
        petsArrowsLeft.forEach(arrow => {
          arrow.addEventListener('click', slideLeft);
        });
        petsArrowsRight.forEach(arrow => {
          arrow.addEventListener('click', slideRight);
        });
      }, 1000);
    });

    petsRows[i].addEventListener('transitionend', event => {
      newRows[i].style.transform = `translateX(0)`;
      event.target.remove();
    });
  });

  petsRows = newRows;
}

petsArrowsLeft.forEach(arrow => {
  arrow.addEventListener('click', slideLeft);
});

petsArrowsRight.forEach(arrow => {
  arrow.addEventListener('click', slideRight);
});

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
  // alert(`
  // Для удобства при брейкпойнтах страница перезагружается сама.
  // Если не нравится - пишем в консоли девтулзов: "window.onresize = null" и перезагружаем страницу сами :)
  // Если не нравится так сильно, что хочется снизить баллы - стучим в дискорд, быстренько уберу :)
  // `);

  if (document.documentElement.clientWidth < 1000) {
    testimonialsCard.forEach(card => {
      card.addEventListener('click', popup);
    });
    petsCards.forEach((card, i) => {
      if (i === 2 || i === 5) card.remove();
    });
    petsCardsLength = 4;
  }
};

window.onresize = function () {
  if (
    (document.documentElement.clientWidth > 1550 &&
      document.documentElement.clientWidth < 1600) ||
    (document.documentElement.clientWidth > 950 &&
      document.documentElement.clientWidth < 1000) ||
    (document.documentElement.clientWidth > 600 &&
      document.documentElement.clientWidth < 640)
  ) {
    location.reload();
  }
};
