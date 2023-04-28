import createKeyboard from './create-keyboard';
import keys from './keys';

class BtnEvents {
  constructor() {
    this.display = document.querySelector('.display__textarea');
    this.keyboard = document.querySelector('.keyboard__container');
    this.btns = document.querySelectorAll('.keyboard__button');
    this.storage = window.localStorage;
  }

  physicalKeyPress() {
    document.addEventListener('keydown', (event) => {
      this.display.focus();
      this.btns.forEach((element) => {
        if (element.dataset.code === event.code) {
          element.classList.add('keyboard__button_animation');
        }
      });

      document.addEventListener('keyup', () => {
        this.btns.forEach((element) => {
          element.classList.remove('keyboard__button_animation');
        });
      });
    });
  }

  changeLang() {
    document.addEventListener('keydown', (event) => {
      if (event.altKey === true && event.ctrlKey === true) {
        if (this.storage.lang === 'en') {
          this.storage.setItem('lang', 'ru');
          this.keyboard.innerHTML = '';
          createKeyboard(keys[this.storage.lang]);
        } else if (this.storage.lang === 'ru') {
          this.storage.setItem('lang', 'en');
          this.keyboard.innerHTML = '';
          createKeyboard(keys[this.storage.lang]);
        }
      }
    });
  }
}

export default BtnEvents;
