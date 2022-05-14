import { renderHTML } from '../components/renderHTML.js';

export const notFoundPage = () => {
  const render = () => {
    const contentMsg = `
      <div class="nfp-container">
        <div class="nfp-container-wrapper">
          <div class="nfp-container-content">
            <p>404 Not found page.<br/>
            Sorry. Do you want <a href="/">to go the first route</a>?</p>
          </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    document
      .querySelector('.nfp-container-content a')
      .addEventListener(
        'ontouchstart' in document.documentElement ? 'touchstart' : 'mouseover',
        e =>
          (e.target.style =
            'color: rgb(190, 150, 30); text-decoration: underline;')
      );
    document
      .querySelector('.nfp-container-content a')
      .addEventListener(
        'ontouchstart' in document.documentElement ? 'touchend' : 'mouseleave',
        e => e.target.removeAttribute('style')
      );
  };
  render();
};
