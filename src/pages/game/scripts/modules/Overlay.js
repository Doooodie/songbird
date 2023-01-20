class Overlay {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.container = document.querySelector('.overlay-container');
    this.heading = document.querySelector('.overlay-heading');
    this.playButton = document.querySelector('.play-button');
  }

  open(score, callback) {
    this.heading.textContent = `Вы прошли игру, получив ${score} из 30 баллов.`;
    this.overlay.classList.remove('hidden');
    this.container.classList.remove('hidden');
    this.playButton.addEventListener('click', callback);
  }

  close(callback) {
    this.heading.textContent = '';
    this.overlay.classList.add('hidden');
    this.container.classList.add('hidden');
    this.playButton.removeEventListener('click', callback);
  }
}

const overlay = new Overlay();

export default overlay;
