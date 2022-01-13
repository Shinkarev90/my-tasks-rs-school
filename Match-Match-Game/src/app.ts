import { headerNav } from "./headerNav/headerNav";
import { about } from "./about/about";
import { score } from "./score/score";
import { Registry } from "./registry/registry";
import { Settings } from "./settings/settings";
import { Game } from "./game4x4/game";

export class App {
  private readonly headerNav: headerNav;
  private about: about;
  private Registry: Registry;

  constructor(private readonly rootElement: HTMLElement) {
    this.headerNav = new headerNav();
    this.rootElement.append(this.headerNav.element);
    const section = document.createElement('section');
    section.className = 'main';
    this.rootElement.append(section);
    const main: any = document.querySelector('.main');
    this.about = new about();
    main.append(this.about.element);
    this.Registry = new Registry();
    this.rootElement.append(this.Registry.element);
  }

  renderNewPage(idPage: string) {
    const main: any = document.querySelector('.main');  //находим мэйн
    main.innerHTML = '';                                //очищаем мэйн
    console.log('renderNewPage');
    console.log(idPage);
    this.headerNav.changeActiveNav(idPage);          //перемещает активное состояние
    if (idPage === 'about') {                        // эсли idpage === about тогда аппендим абоут
      main.append(this.about.element);               // в маин аппендим абоут
      const closeRegistry: Element | null = document.querySelector('.popup');
      console.log(closeRegistry);
      closeRegistry && closeRegistry.remove();  //  удалить элемент
    };
    if (idPage === 'score') {
      const scorePage = new score();
      main.append(scorePage.element);
    };
    if (idPage === 'settings') {
      const settingsPage = new Settings();
      main.append(settingsPage.element);
    };
    if (idPage === 'game') {
      const gamePage = new Game();
      main.append(gamePage.element);
    };
    // if (idPage === 'Registry') {
    //   const RegistryPage = new Registry();
    //   this.rootElement.append(RegistryPage.element);
    // };
    // if (idPage === 'about') {
    //   const closeRegistry: Element | null = document.querySelector('.popup');
    //   closeRegistry && closeRegistry.remove();  //  удалить элемент
    // }
  };

  // renderModalReg(idPage: string) {

  // }
  private handleClick = (element: Element) => {
    const action = element.getAttribute("data-action");
    if (action === "openModal") {
      this.Registry.openReg();     //запускает метод openReg в классе Registry
    }
    if (action === "startGame") {
      //this.--------.startGame();      // метод запуска игры
      window.location.hash = 'game';
    }
  };
  run() {
    window.addEventListener('hashchange', () => {    //по событию 'hashchange'-'изменение хеш' запускает функцию
      const hash = window.location.hash.slice(1);    //в переменную записывается значение хеш из браузерной строки без первого символа#
      this.renderNewPage(hash);                      //запускается renderNewPage с аргументом полученного хеш
    });

    this.headerNav.run(this.handleClick);

  };

}

