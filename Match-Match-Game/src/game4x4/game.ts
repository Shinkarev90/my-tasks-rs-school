import { BaseComponent } from "../createElement/createElement";

export class Game extends BaseComponent {
  constructor() {
    super('div', 'content_game')
    this.element.innerHTML = `
        <div class="time"></div>
        <div class="cards4x4">
          <div class="cards cards44__1"></div>
          <div class="cards cards44__2"></div>
          <div class="cards cards44__3"></div>
          <div class="cards cards44__4"></div>
          <div class="cards cards44__5"></div>
          <div class="cards cards44__6"></div>
          <div class="cards cards44__7"></div>
          <div class="cards cards44__8"></div>
          <div class="cards cards44__9"></div>
          <div class="cards cards44__10"></div>
          <div class="cards cards44__11"></div>
          <div class="cards cards44__12"></div>
          <div class="cards cards44__13"></div>
          <div class="cards cards44__14"></div>
          <div class="cards cards44__15"></div>
          <div class="cards cards44__16"></div>
        </div>
  `;
  }

}