import createKeyboard from './create-keyboard';
import keys from './keys';

class BtnEvents {
  constructor() {
    this.display = document.querySelector('.display__textarea');
    this.keyboard = document.querySelector('.keyboard__container');
    this.btns = document.querySelectorAll('.keyboard__button');
    this.storage = window.localStorage;
  }

  addPressAnimation(code) {
    this.btns = document.querySelectorAll('.keyboard__button');
    this.btns.forEach((element) => {
      if (element.dataset.code === code) {
        element.classList.add('keyboard__button_animation');
      }
    });
  }

  removePressAnimation() {
    this.btns = document.querySelectorAll('.keyboard__button');
    this.btns.forEach((element) => {
      element.classList.remove('keyboard__button_animation');
    });
  }

  physicalKeyPress() {
    document.addEventListener('keydown', (event) => {
      this.display.focus();
      this.addPressAnimation(event.code);
    });

    document.addEventListener('keyup', () => {
      this.removePressAnimation();
    });
  }

  changeLang() {
    document.addEventListener('keydown', (event) => {
      if (event.altKey === true && event.ctrlKey === true) {
        if (this.storage.lang === 'en') {
          this.storage.setItem('lang', 'ru');
          this.keyboard.innerHTML = '';
          createKeyboard(keys[this.storage.lang]);
          this.addPressAnimation(event.code);
        } else if (this.storage.lang === 'ru') {
          this.storage.setItem('lang', 'en');
          this.keyboard.innerHTML = '';
          createKeyboard(keys[this.storage.lang]);
          this.addPressAnimation(event.code);
        }
      }
    });
  }

  showShiftKeys() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Shift') {
        this.keyboard.innerHTML = '';
        createKeyboard(keys[this.storage.lang], 'shift');
        this.addPressAnimation(event.code);
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Shift') {
        this.keyboard.innerHTML = '';
        createKeyboard(keys[this.storage.lang]);
        this.removePressAnimation();
      }
    });
  }

  capsPress() {
    let isCapsPress = false;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'CapsLock' && isCapsPress === false) {
        isCapsPress = true;
        this.keyboard.innerHTML = '';
        createKeyboard(keys[this.storage.lang], 'caps');
        this.addPressAnimation(event.code);
      } else if (event.key === 'CapsLock' && isCapsPress === true) {
        isCapsPress = false;
        this.keyboard.innerHTML = '';
        createKeyboard(keys[this.storage.lang]);
        this.removePressAnimation();
      }
    });
  }
}

export default BtnEvents;
