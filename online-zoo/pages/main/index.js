const petsCards = document.querySelectorAll('.pets-card');
const petsCardsImgs = document.querySelectorAll('.pets-card-img');
const cardsBottoms = document.querySelectorAll('.card-bottom');
const cardsDescriptionsHeadings = document.querySelectorAll(
  '.card-description-heading'
);
const cardsDescriptionsTexts = document.querySelectorAll(
  '.card-description-text'
);

petsCards.forEach((card, i) => {
  card.onmouseover = () => {
    card.classList.add('pets-card_hover');
    petsCardsImgs[i].classList.add('pets-card-img_hover');
    cardsBottoms[i].classList.add('card-bottom_hover');
    cardsDescriptionsHeadings[i].classList.add(
      'card-description-heading_hover'
    );
    cardsDescriptionsTexts[i].classList.add('card-description-heading_hover');
  };
  card.onmouseout = () => {
    card.classList.remove('pets-card_hover');
    petsCardsImgs[i].classList.remove('pets-card-img_hover');
    cardsBottoms[i].classList.remove('card-bottom_hover');
    cardsDescriptionsHeadings[i].classList.remove(
      'card-description-heading_hover'
    );
    cardsDescriptionsTexts[i].classList.remove(
      'card-description-heading_hover'
    );
  };
});
