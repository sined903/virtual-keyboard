const createContainers = () => {
  const main = document.createElement('main');
  main.className = 'main';

  const container = document.createElement('div');
  container.className = 'container';

  const display = document.createElement('div');
  display.className = 'display';

  const message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = 'Клавиатура создана в операционной системе Windows.\n Для переключения языка комбинация: левыe ctrl + alt';

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard__container';

  const displayText = document.createElement('textarea');
  displayText.className = 'display__textarea';

  document.body.append(main);
  main.append(container);
  container.append(display);
  display.append(displayText);
  keyboard.append(keyboardContainer);
  container.append(keyboard);
  container.append(message);
};

export default createContainers;
