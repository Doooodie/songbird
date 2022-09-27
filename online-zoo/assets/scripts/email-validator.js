const form = document.footerSubscription;
const input = document.querySelector('.subscription-email');
const submit = document.querySelector('.subscription-submit');

function checkEmail() {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    input.classList.remove('email-mistake');
    submit.classList.remove('sumbit-mistake');
    input.classList.add('email-active');
    submit.classList.add('submit-active');
    submit.disabled = false;
  } else {
    input.classList.remove('email-active');
    submit.classList.remove('submit-active');
    input.classList.add('email-mistake');
    submit.classList.add('sumbit-mistake');
    submit.disabled = true;
  }
}

form.onclick = function () {
  input.classList.remove('email-default');
  submit.classList.remove('submit-default');
  checkEmail();
};

input.oninput = checkEmail;
