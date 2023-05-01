import createKeyboard from './create-keyboard';
import keys from './keys';

class BtnEvents {
  constructor() {
    this.display = document.querySelector('.display__textarea');
    this.keyboard = document.querySelector('.keyboard__container');
    this.btns = document.querySelectorAll('.keyboard__button');
    this.storage = window.localStorage;
    this.isCapsPress = false;
  }

  letterToUpperCase() {
    this.btns.forEach((item) => {
      const letter = item.firstChild;
      const dataEntry = item.dataset;

      if (item.dataset.type) {
        letter.textContent = item.dataset.entry.toUpperCase();
        dataEntry.entry = letter.textContent.toUpperCase();
      }
    });
  }

  letterToLowerCase() {
    this.btns.forEach((item) => {
      const letter = item.firstChild;
      const dataEntry = item.dataset;

      if (item.dataset.type) {
        letter.textContent = item.dataset.entry.toLowerCase();
        dataEntry.entry = letter.textContent.toLowerCase();
      }
    });
  }

  showHideShiftKeys() {
    this.btns.forEach((element) => {
      const currentSymbol = element.firstChild.innerHTML;
      const symb = element.firstChild;
      const dataElement = element.dataset;

      if (element.dataset.shift) {
        symb.textContent = element.dataset.shift.toString();
        dataElement.entry = symb.textContent.toString();
        dataElement.shift = currentSymbol.toString();
      }

      if (symb.textContent === '&amp;') {
        symb.textContent = '&';
      } else if (symb.textContent === '&lt;') {
        symb.textContent = ',';
      } else if (symb.textContent === '&gt;') {
        symb.textContent = '.';
      }
    });
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

  pressShiftKeys() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Shift') {
        this.showHideShiftKeys();
        if (this.isCapsPress) {
          this.letterToLowerCase();
        } else {
          this.letterToUpperCase();
        }
        this.addPressAnimation(event.code);
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Shift') {
        this.showHideShiftKeys();
        if (this.isCapsPress) {
          this.letterToUpperCase();
        } else {
          this.letterToLowerCase();
        }

        this.removePressAnimation();
      }
    });
  }

  capsPress() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'CapsLock' && this.isCapsPress === false) {
        this.isCapsPress = true;
        this.letterToUpperCase();
        this.addPressAnimation(event.code);
      } else if (event.key === 'CapsLock' && this.isCapsPress === true) {
        this.isCapsPress = false;
        this.letterToLowerCase();
        this.removePressAnimation();
      }
    });
  }

  clickKeyboard() {
    let currentClick;

    this.keyboard.addEventListener('mousedown', (event) => {
      const btn = event.target;
      currentClick = event.target;
      if (btn.classList.contains('keyboard__mask')) {
        this.addPressAnimation(btn.closest('button').dataset.code);

        if (btn.closest('button').dataset.entry !== undefined) {
          this.display.value += btn.closest('button').dataset.entry;
        }
      }
    });

    this.keyboard.addEventListener('mouseup', (event) => {
      if (event.target === currentClick) {
        this.removePressAnimation();
      }
    });
  }

  clickCaps() {
    const capsBtn = document.querySelector('.keyboard__button_caps').lastChild;

    capsBtn.addEventListener('mousedown', () => {
      if (this.isCapsPress === false) {
        this.isCapsPress = true;
        this.letterToUpperCase();
        this.addPressAnimation('CapsLock');
      } else if (this.isCapsPress === true) {
        this.isCapsPress = false;
        this.letterToLowerCase();
        this.addPressAnimation('CapsLock');
      }
    });

    capsBtn.addEventListener('mouseup', () => {
      this.removePressAnimation();
    });
  }

  clickShiftKey() {
    const shiftBtn = document.querySelector('.keyboard__button_lshift');

    shiftBtn.addEventListener('mousedown', () => {
      if (this.isCapsPress) {
        this.letterToLowerCase();
      } else {
        this.letterToUpperCase();
      }

      this.showHideShiftKeys();
      this.addPressAnimation('ShiftLeft');
    });

    shiftBtn.addEventListener('mouseup', () => {
      if (this.isCapsPress) {
        this.letterToUpperCase();
      } else {
        this.letterToLowerCase();
      }
      this.showHideShiftKeys();
      this.removePressAnimation();
    });
  }

  enterclick() {
    const enter = document.querySelector('.keyboard__button_enter');

    enter.addEventListener('mousedown', () => {
      this.display.value += '\n';
    });
  }

  backspaceClick() {
    const back = document.querySelector('.keyboard__button_back');

    back.addEventListener('click', () => {
      this.display.value = this.display.value.slice(0, -1);
    });
  }

  delClick() {
    const back = document.querySelector('.keyboard__button_del');

    back.addEventListener('click', () => {
      this.display.value = this.display.value.slice(0, -1);
    });
  }
}

export default BtnEvents;
