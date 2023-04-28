const createKeyboard = (keys) => {
  const keyboard = document.querySelector('.keyboard__container');

  keys.en.forEach((element) => {
    const button = document.createElement('button');
    button.className = element.class;

    const symb = document.createElement('div');
    const btnMask = document.createElement('div');
    btnMask.className = 'keyboard__mask';
    symb.className = 'keyboard__symbol';
    button.dataset.code = element.code;
    if (element.changeText) {
      symb.textContent = element.text;
    } else {
      symb.textContent = element.key;
      button.dataset.entry = element.code;
    }

    button.append(symb);
    button.append(btnMask);
    keyboard.append(button);
  });
};
export default createKeyboard;
