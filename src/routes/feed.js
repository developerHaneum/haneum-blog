import './feed.css';
import renderHTML from '../components/renderHTML.js';
import routes from '../components/routes.js';

const feed = () => {
  const render = () => {
    const contentMsg = `
      <div class="feed-container">
        <div class="feed-container-content"></div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    renderHTML(
      Object.keys(routes)
        .map(
          (path, key) =>
            `${
              !(path === '/' || path === '/404')
                ? `<div class="feed-container-wrapper">
                    <div id="${key}" class="feed-content-items" role="link">
                      <a href="${path}">${routes[path].title}</a>
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

export default feed;
