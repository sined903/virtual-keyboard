import '../template.html';
import '../styles/main.scss';
import keys from './modules/keys';

import createContainers from './modules/create-container';
import createKeyboard from './modules/create-keyboard';
import BtnEvents from './modules/keyboard-event';

const checkLanguage = () => {
  let currentLang = 'en';
  const storage = window.localStorage;

  if (storage.lang !== undefined) {
    currentLang = storage.lang;
  }

  return currentLang;
};

createContainers();
createKeyboard(keys[checkLanguage()]);

const btnEvents = new BtnEvents();
btnEvents.physicalKeyPress();
btnEvents.changeLang();
btnEvents.showShiftKeys();
btnEvents.capsPress();
