import { BaseComponent } from "../createElement/createElement";
const avatar1 = require('../assets/avatar.png');

export class Registry extends BaseComponent {
  constructor() {
    super('div', 'popup')
    this.element.innerHTML = `
    <div class="popup-registr popup-open">
      <div class="popup__container">
        <div class="popup__title">Registr new Player</div>
        <div class="popup__content">
          <div class="popup__inputs">
            <div class="popap__input">
              <div class="inputs">
                <p class="inputs-p">First Name</p>
                <input type="text" id=""></input>
              </div>
              <div class="ok">
                <img src="../popup/assets/ok.png" alt="">
              </div>
            </div>
            <div class="popap__input">
              <div class="inputs">
                <p class="inputs-p">Last Name</p>
                <input type="text" ></input>
              </div>
              <div class="ok">
                <img src="assets/ok.png" alt="">
              </div>
            </div>
            <div class="popap__input">
              <div class="inputs">
                <p class="inputs-p">E-mail</p>
                <input type="text" ></input>
              </div>
              <div class="ok">
                <img src="assets/ok.png" alt="">
              </div>
            </div>
          </div>
          <div class="avatar">
            <img src="../popup/assets/nonavatar.png" alt="">
          </div>
        </div>
        <div class="popup-footer">
          <button class="button button__add-user">Add user</button>
          <button class="button button__cancel">cancel</button>
        </div>
      </div>
    </div>
    `
  }

  openReg() {
    const RegModal = document.querySelector('.popup-registr');
    RegModal?.classList.remove('popup-open');
    const closeBtn = document.querySelector('.button__cancel');
    closeBtn && closeBtn.addEventListener('click', () => {      // по клику запускается функция closeReg()
      this.closeReg();
    });
    const addUser = document.querySelector('.button__add-user');
    addUser && addUser.addEventListener('click', () => {        // по клику запускается функция closeReg()
      this.addUser()
      this.closeReg();
    });
  }

  closeReg() {
    const RegModal = document.querySelector('.popup-registr');
    RegModal?.classList.add('popup-open');
    const closeBtn = document.querySelector('.button__cancel');  // заново находим кнопку
    closeBtn && closeBtn.removeEventListener('click', () => {    // удаляем обработчик события
      this.closeReg();
    });
    const addUser = document.querySelector('.button__add-user');  // заново находим кнопку
    addUser && addUser.removeEventListener('click', () => {       // удаляем обработчик события
      this.closeReg();
    });
  }

  addUser() {
    const regBtn = document.querySelector('.new-player');
    regBtn && regBtn.setAttribute('data-action', 'startGame');
    regBtn && (regBtn.innerHTML = "START GAME");
    const avatar = document.createElement('div');
    avatar.className = 'player';
    avatar.innerHTML = `
      <img src="${avatar1}" alt="avatar">
      `;
    const navNeader = document.querySelector('.h');
    navNeader && navNeader.append(avatar);
  }

};
