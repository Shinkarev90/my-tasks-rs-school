import './styles.scss';
import { App } from './app';

const aboutImg = require('./assets/Rectangle-3.png');

window.onload = () => {

  const apper = document.createElement('div');
  apper.className = 'wrapper';
  document.body.append(apper);
  const wrapper = document.querySelector('.wrapper');

  const app = new App(wrapper as HTMLElement);
  app.run();

}

