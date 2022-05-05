import './feed-content.css';
import { renderHTML } from '../components/renderHTML.js';

export const feed = () => {
  const render = () => {
    const contentMsg = `
      <div class="feed-container">
        <div class="feed-container-wrapper">
          <div class="feed-container-content">
            <div class="feed-content-items">
              <a href="/">hi!</a>
            </div>
            <div class="feed-content-items">
              <a href="/love-is">Love is.</a>
            </div>
          </div>
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener('mouseover', e => {
        e.target.style = 'text-decoration: underline;';
      });
      item.addEventListener('mouseleave', e => (e.target.style = ''));
    });
  };
  render();
};
