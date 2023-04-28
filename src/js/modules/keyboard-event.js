class BtnEvents {
  constructor() {
    this.display = document.querySelector('.display__textarea');
    this.btns = document.querySelectorAll('.keyboard__button');
  }

  keyPress() {
    document.addEventListener('keydown', (event) => {
      this.display.focus();
      this.btns.forEach((element) => {
        if (element.dataset.code === event.code) {
          element.classList.add('keyboard__button_animation');
        }
      });

      document.addEventListener('keyup', () => {
        this.btns.forEach((element) => {
          element.classList.remove('keyboard__button_animation');
        });
      });
    });
  }
}

export default BtnEvents;
