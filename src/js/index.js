import '../template.html';
import '../styles/main.scss';
import keys from './modules/keys';

import createContainers from './modules/create-container';
import createKeyboard from './modules/create-keyboard';
/* import { keyPress, clickKeyboard } from './modules/keyboard-event'; */

createContainers();
createKeyboard(keys);
/* keyPress();
clickKeyboard(); */
