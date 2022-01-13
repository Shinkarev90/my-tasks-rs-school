import { BaseComponent } from '../createElement/createElement';
const logoImg = require('../assets/logo.png');
const about1 = require('../assets/about1.png');
const scoreImg = require('../assets/score.png');
const settings1Img = require('../assets/settings1.png');


export class headerNav extends BaseComponent {
  constructor() {
    super('header', 'h')
    this.element.innerHTML = `
    <div class="logo">
      <img src="${logoImg}" alt="">
    </div>
    <div class="block"></div>
    <div class="nav">
      <a href="#about" class="nav-btn activeNav">
        <div class="nav-logo">
          <div class="cont__nav-logo">
            <img src="${about1}" alt="">
          </div>
        </div>
        <div class="nav-text nav-text__active">About Game</div>
      </a>
      <a href="#score" class="nav-btn score">
        <div class="nav-logo">
          <div class="cont__nav-logo">
            <img src="${scoreImg}" alt="">
          </div>
        </div>
        <div class="nav-text">Best Score</div>
      </a>
      <a href="#settings" class="nav-btn settings">
        <div class="nav-logo">
          <div class="cont__nav-logo">
            <img class="img-logo" src="${settings1Img}" alt="">
          </div>
        </div>
        <div class="nav-text">Game Settings</div>
      </a>
    </div>
    <div class="block-1"></div>
    <button class="new-player" data-action="openModal">register new player</button>

  `;
  };

  changeActiveNav(idPage: string) {                                          // выделение пункта на какой странице находимся
    const oldActiveNav = document.querySelector('.nav-btn.activeNav');       // находим элемент с двумя классами .nav-btn и .activeNav
    oldActiveNav?.classList.remove('activeNav');                             // удаляем класс .activeNav у этого элемента
    const newActiveNav = document.querySelector(`.nav-btn[href="#${idPage}"]`); //находим элемент с классом .nav-btn и hrev= тем что пришел в idPage
    newActiveNav?.classList.add('activeNav');                                   //добавляем найденному элементу класс activeNav
  };

  run(callback: Function) {
    const btnreg = document.querySelector('.new-player');
    btnreg?.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element) {         //проверка для typeScript проверяем если Element то код выполнится
        callback(target);
        console.log('target');
      };
      
    });
  }
}
