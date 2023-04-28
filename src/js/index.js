import '../template.html';
import '../styles/main.scss';
import keys from './modules/keys';

import createContainers from './modules/create-container';
import createKeyboard from './modules/create-keyboard';
import BtnEvents from './modules/keyboard-event';

createContainers();
createKeyboard(keys);

const btnEvents = new BtnEvents();
btnEvents.keyPress();
