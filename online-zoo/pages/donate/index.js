const radioSelections = document.querySelectorAll('.radio-selection');
const radioDollarIcons = document.querySelectorAll('.radio-dollar-icon');
const radioTexts = document.querySelectorAll('.radio-text');
const anotherAmount = document.querySelector('.another-amount');
const dollars1000Selector = radioSelections[2];
const dollars1000Icon = radioDollarIcons[2];
const dollars1000Text = radioTexts[2];
const dollars100Selector = radioSelections[5];
const dollars100Icon = radioDollarIcons[5];
const dollars100Text = radioTexts[5];

window.onload = alert(
  'Радиокнопки "по умолчанию" соответствуют макетам, если обновить страницу с нужным viewport (<891px)'
);

if (document.documentElement.clientWidth < 891) {
  dollars1000Selector.checked = false;
  dollars1000Icon.classList.remove('radio-dollar-icon_checked');
  dollars1000Text.classList.remove('radio-text_checked');
  dollars100Selector.checked = true;
  dollars100Icon.classList.add('radio-dollar-icon_checked');
  dollars100Text.classList.add('radio-text_checked');
} else {
  dollars1000Selector.checked = true;
  dollars1000Icon.classList.add('radio-dollar-icon_checked');
  dollars1000Text.classList.add('radio-text_checked');
  dollars100Selector.checked = false;
  dollars100Icon.classList.remove('radio-dollar-icon_checked');
  dollars100Text.classList.remove('radio-text_checked');
}

radioSelections.forEach((radio, i) => {
  radio.onchange = () => {
    for (let k = 0; k < radioSelections.length; k++) {
      radioDollarIcons[k].classList.remove('radio-dollar-icon_checked');
      radioTexts[k].classList.remove('radio-text_checked');
    }
    radioDollarIcons[i].classList.add('radio-dollar-icon_checked');
    radioTexts[i].classList.add('radio-text_checked');
  };
});

anotherAmount.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};
