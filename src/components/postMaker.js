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
            if (
              window.matchMedia('(prefers-color-scheme: light)').matches ===
              true
            ) {
              e.target.style =
                'color: white; font-size: 28.75px; line-height: 33.75px;';
            } else {
              e.target.style =
                'text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; font-size: 28.75px; line-height: 33.75px;';
            }
          } else {
            e.target.style = 'text-decoration: underline;';
          }
        }
      );
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchend' : 'mouseleave',
        e => e.target.removeAttribute('style')
      );
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
              if (
                window.matchMedia('(prefers-color-scheme: light)').matches ===
                true
              ) {
                e.target.style =
                  'color: white; font-size: 28.75px; line-height: 33.75px;';
              } else {
                e.target.style =
                  'text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; font-size: 28.75px; line-height: 33.75px;';
              }
            } else {
              e.target.style = 'text-decoration: underline;';
            }
          }
        );
        item.addEventListener(
          'ontouchstart' in document.documentElement
            ? 'touchend'
            : 'mouseleave',
          e => e.target.removeAttribute('style')
        );
      });
    }).observe(document.querySelector('.content-main'), {
      childList: true,
      subtree: true,
    });
  };
  render();
};
