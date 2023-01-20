import formatDate from './formatDate';

export default function renderResults() {
  const results = JSON.parse(localStorage.getItem('results'));
  const mainContainer = document.querySelector('.main-container');

  if (!results) {
    const errorMessage = 'Не найдено результатов! Попробуйте пройти игру хотя бы раз.';
    const messageContainer = document.createElement('h2');
    messageContainer.className = 'error-message';

    messageContainer.textContent = errorMessage;
    mainContainer.append(messageContainer);
  } else {
    const resultsContainer = document.createElement('ul');
    resultsContainer.className = 'results-container';

    results.forEach((result) => {
      const date = formatDate(result.date);
      const { score } = result;

      const resultContainer = document.createElement('li');
      resultContainer.className = 'result';
      resultContainer.textContent = `${date} игрок набрал ${score} из 30 возможных баллов.`;

      resultsContainer.prepend(resultContainer);
      mainContainer.append(resultsContainer);
    });
  }
}
