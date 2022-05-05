import './header.css';
import './content.css';
import { content } from './content.js';
import { renderHTML } from './renderHTML.js';
import { header } from './header.js';

export const postMaker = contentMsg => {
  const render = () => {
    const htmlContent = `
      ${content(contentMsg)}
    `;
    renderHTML(htmlContent, document.querySelector('#root'));
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener('mouseover', e => {
        console.log(e.target.parentNode.className);
        if (e.target.parentNode.className === 'header-navigator') {
          e.target.style = '';
        } else {
          e.target.style = 'text-decoration: underline;';
        }
      });
      item.addEventListener('mouseleave', e => (e.target.style = ''));
    });
  };
  render();
};
