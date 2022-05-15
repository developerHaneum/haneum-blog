import './feed.css';
import { renderHTML } from '../components/renderHTML.js';
import { routeContents } from '../components/routeContents.js';

export const feed = () => {
  const render = () => {
    const contentMsg = `
      <div class="feed-container">
          <div class="feed-container-content"></div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    renderHTML(
      Object.keys(routeContents)
        .map(
          path =>
            `${
              !(path === '/feed' || path === '/404' || path === '/503')
                ? `<div class="feed-container-wrapper">
                    <div class="feed-content-items" role="link">
                      <a href="${path}">${
                    path === '/'
                      ? 'Hi, Nice to meet you.'
                      : routeContents[path].title
                  }</a>
                    </div>
                  </div>`
                : ''
            }`
        )
        .join(''),
      document.querySelector('.feed-container-content')
    );
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchstart' : 'mouseover',
        e =>
          (e.target.style = `color: royalblue; ${
            'ontouchstart' in document.documentElement
              ? 'font-size: 27.25px; line-height: 35px;'
              : 'font-size: 28.75px; line-height: 35px;'
          }`)
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
  };
  render();
};
