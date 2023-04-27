const createKeyboard = (keys) => {
  const keyboard = document.querySelector('.keyboard__container');

  keys.en.forEach((element) => {
    const button = document.createElement('button');
    button.className = element.class;
    const symb = document.createElement('div');
    symb.className = 'keyboard__symbol';
    symb.textContent = element.key;

    button.append(symb);
    keyboard.append(button);
  });
};
export default createKeyboard;
