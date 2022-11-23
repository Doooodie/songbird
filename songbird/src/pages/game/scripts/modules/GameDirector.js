import songBirdLogo from '../../../../assets/images/songbird-logo.svg';
import unknownBirdImage from '../../../../assets/images/bird.jpg';
import rsSchoolLogo from '../../../../assets/images/rsschool-logo.svg';
import winSound from '../../../../assets/sounds/win.mp3';
import errorSound from '../../../../assets/sounds/error.mp3';

import overlay from './Overlay';
import birdsData from './birds';

class GameDirector {
  constructor() {
    this.songBirdLogo = songBirdLogo;
    this.rsSchoolLogo = rsSchoolLogo;
    this.unknownBirdImage = unknownBirdImage;

    this.winSound = new Audio(winSound);
    this.errorSound = new Audio(errorSound);

    this.birdsData = birdsData;

    this.birdsNames = [];
    this.birdName = '';
    this.birdSpecies = '';
    this.birdDescription = '';
    this.birdSound = '';
    this.birdImage = '';

    this.round = -1;
    this.score = 5;
    this.totalScore = 0;
    this.randomNumber = 0;

    this.gameFinished = false;
    this.roundFinished = false;
    this.clickedOnce = false;

    this.lastBird = null;
  }

  insertLogos() {
    const songBirdLogoElement = document.querySelector('.songbird-logo');
    const rsSchoolLogoElement = document.querySelector('.rsschool-logo');

    songBirdLogoElement.src = this.songBirdLogo;
    rsSchoolLogoElement.src = this.rsSchoolLogo;
  }

  setRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 6);
  }

  startGame = () => {
    this.round = -1;
    this.totalScore = 0;

    overlay.close();
    this.insertLogos();
    this.renderScore();
    this.startRound();
  };

  finishGame() {
    this.gameFinished = true;

    this.saveResult();
    overlay.open(this.totalScore, this.startGame);
  }

  startRound = () => {
    this.roundFinished = false;
    this.clickedOnce = false;
    this.round += 1;

    this.setRandomNumber();
    this.setActiveSection();
    this.toggleDetails();
    this.toggleButton();
    this.setBirdInfo();
    this.insertSummary();
    this.insertBirdsNames();
    this.handleBirdsClicks();

    console.log(this.birdName);
  };

  finishRound() {
    this.roundFinished = true;
    this.totalScore += this.score;

    this.insertSummary();
    this.renderScore();
    this.resetScore();

    if (this.round < 5) {
      this.toggleButton();
    } else {
      this.finishGame();
    }
  }

  renderScore() {
    const scoreElement = document.querySelector('.score');

    scoreElement.textContent = `Очки: ${this.totalScore}`;
  }

  resetScore() {
    this.score = 5;
  }

  saveResult() {
    const now = Date.now();
    let storage = JSON.parse(localStorage.getItem('results'));

    if (!storage) {
      localStorage.setItem('results', JSON.stringify([]));
      storage = JSON.parse(localStorage.getItem('results'));
    }

    const results = {
      date: now,
      score: this.totalScore,
    };

    localStorage.setItem('results', JSON.stringify([...storage, results]));
  }

  handleBirdsClicks() {
    const birdsNames = document.querySelectorAll('.bird-name');
    birdsNames.forEach((bird) => {
      bird.addEventListener('click', this.checkForCorrectAnswer);
    });
  }

  checkForCorrectAnswer = (e) => {
    const birdName = e.target.textContent;
    const birdIndex = this.birdsNames.indexOf(birdName);

    this.insertBirdDetails(birdIndex);

    if (!this.clickedOnce) {
      this.toggleDetails();
      this.clickedOnce = true;
    }

    if (!this.roundFinished) {
      const indicator = e.target.firstElementChild;

      if (e.target.textContent === this.birdName) {
        this.winSound.pause();
        this.winSound.currentTime = 0;
        this.winSound.play();
        indicator.classList.add('success');
        this.finishRound();
      } else {
        this.errorSound.pause();
        this.errorSound.currentTime = 0;
        this.errorSound.play();
        indicator.classList.add('error');

        if (this.lastBird !== birdName) {
          if (this.score > 0) this.score -= 1;
        }

        this.lastBird = e.target.textContent;
      }
    }
  };

  toggleDetails() {
    const detailsElement = document.querySelector('.details');
    const promptElement = document.querySelector('.prompt');

    detailsElement.classList.toggle('hidden');
    promptElement.classList.toggle('hidden');
  }

  toggleButton() {
    const buttonElement = document.querySelector('.main-button');

    if (!this.roundFinished) {
      buttonElement.disabled = true;
      buttonElement.removeEventListener('click', this.startRound);
      buttonElement.classList.remove('success');
    } else {
      buttonElement.disabled = false;
      buttonElement.addEventListener('click', this.startRound);
      buttonElement.classList.add('success');
    }
  }

  insertSummary() {
    const birdImageElement = document.querySelector('.summary-bird-image');
    const birdNameElement = document.querySelector('.summary-birdname');
    const birdSoundElement = document.querySelector('.summary-audio');

    birdSoundElement.src = this.birdSound;

    if (this.roundFinished) {
      birdImageElement.src = this.birdImage;
      birdNameElement.textContent = this.birdName;
    } else {
      birdImageElement.src = this.unknownBirdImage;
      birdNameElement.textContent = '******';
    }
  }

  insertBirdsNames() {
    this.setBirdsNames();

    const birdsNames = document.querySelectorAll('.bird-name');
    const indicators = [];

    birdsNames.forEach((birdname, i) => {
      const indicator = document.createElement('span');
      indicator.className = 'indicator';
      const name = birdname;
      indicators.push(indicator);
      name.textContent = this.birdsNames[i];
      name.prepend(indicator);
    });
  }

  insertBirdDetails(birdIndex) {
    const birdImageElement = document.querySelector('.details-bird-image');
    const birdNameElement = document.querySelector('.details-birdname');
    const birdSoundElement = document.querySelector('.details-audio');
    const birdSpeciesElement = document.querySelector('.details-species');
    const birdDetailsElement = document.querySelector('.details-bottom');

    const data = this.birdsData[this.round][birdIndex];

    birdImageElement.src = data.image;
    birdNameElement.textContent = data.name;
    birdSoundElement.src = data.audio;
    birdSpeciesElement.textContent = data.species;
    birdDetailsElement.textContent = data.description;
  }

  setActiveSection() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.classList.remove('section-active'));
    sections[this.round].classList.add('section-active');
  }

  setBirdInfo() {
    const data = this.birdsData[this.round][this.randomNumber];
    this.birdName = data.name;
    this.birdSpecies = data.species;
    this.birdDescription = data.description;
    this.birdSound = data.audio;
    this.birdImage = data.image;
  }

  setBirdsNames() {
    const data = this.birdsData[this.round];
    this.birdsNames = data.map((bird) => bird.name);
  }
}

const gameDirector = new GameDirector();

export default gameDirector;
