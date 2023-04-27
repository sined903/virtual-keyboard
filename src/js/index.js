import '../template.html';
import '../styles/main.scss';
import keys from './modules/keys';

import createContainers from './modules/create-container';
import createKeyboard from './modules/create-keyboard';

createContainers();
createKeyboard(keys);

document.addEventListener('keydown', (event) => {
  console.log(event);
});
