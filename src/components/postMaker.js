import { header } from './header.js';
import { content } from './content.js';
import { renderHTML } from './renderHTML.js';

export const postMaker = contentMsg => {
  const render = () => {
    const msg = `
      ${header()}
      ${content(contentMsg)}
    `;
    renderHTML(msg, document.querySelector('#root'));
    // logics
  };
  render();
};
