import './feed.css';
import { renderHTML } from '../components/renderHTML.js';
import { routeContents } from '../components/routeContents.js';

export const feed = () => {
  const render = () => {
    const contentMsg = `
      <div class="feed-container">
        <div class="feed-container-wrapper">
          <div class="feed-container-content"></div>
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    renderHTML(
      Object.keys(routeContents)
        .map(
          key => `
          ${
            !(key === '/feed' || key === '/404' || key === '/503')
              ? `
                <div class="feed-content-items">
                  <a href="${key}">${
                  key === '/'
                    ? 'Hi, Nice to meet you.'
                    : routeContents[key].title
                }</a>
                </div>
              `
              : ''
          }`
        )
        .join(''),
      document.querySelector('.feed-container-content')
    );
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchstart' : 'mouseover',
        e => {
          if (
            window.matchMedia('(prefers-color-scheme: light)').matches === true
          ) {
            e.target.style = 'color: royalblue;';
          } else {
            e.target.style =
              'text-shadow: -1px 0px royalblue, 0px 1px royalblue, 1px 0px royalblue, 0px -1px royalblue;';
          }
        }
      );
      item.addEventListener(
        'ontouchstart' in document.documentElement ? 'touchend' : 'mouseleave',
        e => (e.target.style = '')
      );
    });
  };
  render();
};
