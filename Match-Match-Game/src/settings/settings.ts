import { BaseComponent } from "../createElement/createElement";

export class Settings extends BaseComponent {
  constructor() {
    super('div', 'container-settings')
    this.element.innerHTML = `
        <div class="setting-game">
          <div class="setting-game__title">Game cards</div>
          <select class="setting-game__select">
            <option value="">Cards Animal</option>
            <option value="">Cards Cars</option>
          </select>
        </div>
        <div class="setting-difficulty">
          <div class="setting-difficulty__title">Difficulty</div>
          <select class="setting-difficulty__select">
            <option value="">4x4 16 Cards</option>
            <option value="">6x6 36 Cards</option>
          </select>
        </div>
    `
  }
}