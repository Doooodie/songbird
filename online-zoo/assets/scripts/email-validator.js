const form = document.footerSubscription;
const input = document.querySelector('.subscription-email');
const submit = document.querySelector('.subscription-submit');

function checkEmail() {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    submit.classList.remove('sumbit-mistake');
    submit.classList.add('submit-active');
    submit.disabled = false;
  } else {
    submit.classList.remove('submit-active');
    submit.classList.add('sumbit-mistake');
    submit.disabled = true;
  }
}

form.onclick = function () {
  submit.classList.remove('submit-default');
  checkEmail();
};

input.oninput = checkEmail;
