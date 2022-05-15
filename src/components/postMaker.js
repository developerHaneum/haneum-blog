import './content.css';
import { content } from './content.js';
import { renderHTML } from './renderHTML.js';

export const postMaker = contents => {
  const render = () => {
    renderHTML(content(contents), document.querySelector('#root'));
    // Hover processing
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchstart' : 'mouseover',
        e => {
          if (e.target.parentNode.className === 'content-title') {
            e.target.style = `color: white; ${
              'ontouchstart' in document.documentElement
                ? 'font-size: 27.25px; line-height: 35px;'
                : 'font-size: 28.75px; line-height: 35px;'
            }`;
          } else {
            e.target.style = 'color: rgb(190, 150, 30);';
          }
        }
      );
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchend' : 'mouseleave',
        e => e.target.removeAttribute('style')
      );
      if ('ontouchstart' in document.documentElement) {
        item.addEventListener('touchcancel', e =>
          e.target.removeAttribute('style')
        );
      }
    });
    // Hover (state component) processing
    new MutationObserver(() => {
      document.querySelectorAll('a').forEach(item => {
        item.addEventListener(
          'ontouchstart' in document.documentElement
            ? 'touchstart'
            : 'mouseover',
          e => {
            if (e.target.parentNode.className === 'content-title') {
              e.target.style = `color: white; ${
                'ontouchstart' in document.documentElement
                  ? 'font-size: 27.25px; line-height: 35px;'
                  : 'font-size: 28.75px; line-height: 35px;'
              }`;
            } else {
              e.target.style = 'color: rgb(190, 150, 30);';
            }
          }
        );
        item.addEventListener(
          'ontouchstart' in document.documentElement
            ? 'touchend'
            : 'mouseleave',
          e => e.target.removeAttribute('style')
        );
        if ('ontouchstart' in document.documentElement) {
          item.addEventListener('touchcancel', e =>
            e.target.removeAttribute('style')
          );
        }
      });
    }).observe(document.querySelector('.content-main'), {
      childList: true,
      subtree: true,
    });
  };
  render();
};
