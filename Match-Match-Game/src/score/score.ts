import { BaseComponent } from '../createElement/createElement';
// const aboutImg = require('../assets/Rectangle-3.png');

export class score extends BaseComponent {
  constructor() {
    super('div', 'content-score')
    this.element.innerHTML = `
      <div class="content">
        <div class="content__best">Best players</div>
        <div class="best__player">
          <div class="best__avatar">
            <img class="ava" src="assets/best-avatar.png" alt="">
          </div>
          <div class="best__info">
            <div class="best__name">Nicci Troiani</div>
            <div class="best__email">nicci@gmail.com</div>
          </div>
          <div class="zero"></div>
          <div class="best__score">
            <div class="best__score__text">Score:</div>
            <div class="best__score__num">456</div>
          </div>
        </div>
        <div class="best__player">
          <div class="best__avatar">
            <img class="ava" src="assets/best-avatar.png" alt="">
            <div class="best-avatar__circle"></div>
          </div>
          <div class="best__info">
            <div class="best__name">Nicci Troiani</div>
            <div class="best__email">nicci@gmail.com</div>
          </div>
          <div class="zero"></div>
          <div class="best__score">
            <div class="best__score__text">Score:</div>
            <div class="best__score__num">456</div>
          </div>
        </div>
      </div>
    `;
  }
}