const createKeyboard = (keys, mode) => {
  const keyboard = document.querySelector('.keyboard__container');

  keys.forEach((element) => {
    const button = document.createElement('button');
    button.className = element.class;

    const symb = document.createElement('div');
    const btnMask = document.createElement('div');
    btnMask.className = 'keyboard__mask';
    symb.className = 'keyboard__symbol';
    button.dataset.code = element.code;

    if (element.changeText) {
      symb.textContent = element.text;
    } else if (mode === 'shift' && element.shiftMode !== undefined) {
      symb.textContent = element.shiftMode;
    } else if (mode === 'shift' || mode === 'caps') {
      symb.textContent = element.key.toUpperCase();
    } else {
      symb.textContent = element.key;
    }

    button.append(symb);
    button.append(btnMask);
    keyboard.append(button);
  });
};

export default createKeyboard;
