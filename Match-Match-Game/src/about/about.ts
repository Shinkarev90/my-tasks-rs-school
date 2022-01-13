import { BaseComponent } from '../createElement/createElement';
const aboutImg = require('../assets/Rectangle-3.png');

export class about extends BaseComponent {
  constructor() {
    super('div', 'contentAbout')
    this.element.innerHTML = `
      <img src="${aboutImg}" alt="">
    `;
  }
}