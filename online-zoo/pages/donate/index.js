const radioSelections = document.querySelectorAll('.radio-selection');
const radioDollarIcons = document.querySelectorAll('.radio-dollar-icon');
const radioTexts = document.querySelectorAll('.radio-text');
const anotherAmount = document.querySelector('.another-amount');

function activateRadioText(i) {
  for (let k = 0; k < radioSelections.length; k++) {
    radioDollarIcons[k].classList.remove('radio-dollar-icon_checked');
    radioTexts[k].classList.remove('radio-text_checked');
  }
  radioDollarIcons[i].classList.add('radio-dollar-icon_checked');
  radioTexts[i].classList.add('radio-text_checked');
}

radioSelections.forEach((radio, i) => {
  radio.onchange = () => {
    activateRadioText(i);
    anotherAmount.value = radioTexts[i].innerHTML;
  };
});

anotherAmount.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }

  radioTexts.forEach((text, i) => {
    if (text.innerHTML == this.value) {
      radioSelections[i].checked = true;
      activateRadioText(i);
    } else {
      radioSelections[i].checked = false;
      radioDollarIcons[i].classList.remove('radio-dollar-icon_checked');
      text.classList.remove('radio-text_checked');
    }
  });
};
