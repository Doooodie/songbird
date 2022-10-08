const wrapper = document.querySelector('.wrapper');
const burgerBtn = document.querySelector('.header-burger');
const headerBottom = document.querySelector('.header-bottom');
const overlay = document.createElement('div');
overlay.className = 'overlay';

function switchBurger() {
  if (burgerBtn.classList.contains('burger-open')) {
    burgerBtn.classList.remove('burger-open');
    headerBottom.style.display = 'none';
    overlay.remove();
    overlay.removeEventListener('click', switchBurger);
  } else {
    burgerBtn.classList.add('burger-open');
    headerBottom.style.display = 'initial';
    wrapper.prepend(overlay);
    overlay.addEventListener('click', switchBurger);
  }
}

burgerBtn.onclick = switchBurger;
