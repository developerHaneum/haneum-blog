import './content.css';
import { content } from './content.js';
import { renderHTML } from './renderHTML.js';

export const postMaker = contentMsg => {
  const render = () => {
    const htmlContent = `
      ${content(contentMsg)}
    `;
    renderHTML(htmlContent, document.querySelector('#root'));
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener('mouseover', e => {
        if (e.target.parentNode.className === 'content-title') {
          if (
            window.matchMedia('(prefers-color-scheme: light)').matches === true
          ) {
            e.target.style = 'color: rgb(190, 120, 30);';
          } else {
            e.target.style =
              'text-shadow: -1px 0px rgb(190, 120, 30), 0px 1px rgb(190, 120, 30), 1px 0px rgb(190, 120, 30), 0px -1px rgb(190, 120, 30);';
          }
        } else {
          e.target.style = 'text-decoration: underline;';
        }
      });
      item.addEventListener('mouseleave', e => (e.target.style = ''));
    });
    // 만약 posts routes에서 상태 변화 (renderHTML) 가 일어나면 또 다시 mouseover 로직을 실행해줍니다.
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a').forEach(item => {
        item.addEventListener('mouseover', e => {
          if (e.target.parentNode.className === 'content-title') {
            if (
              window.matchMedia('(prefers-color-scheme: light)').matches ===
              true
            ) {
              e.target.style = 'color: rgb(190, 120, 30);';
            } else {
              e.target.style =
                'text-shadow: -1px 0px rgb(190, 120, 30), 0px 1px rgb(190, 120, 30), 1px 0px rgb(190, 120, 30), 0px -1px rgb(190, 120, 30);';
            }
          } else {
            e.target.style = 'text-decoration: underline;';
          }
        });
        item.addEventListener('mouseleave', e => (e.target.style = ''));
      });
    });
    observer.observe(document.querySelector('.content-main p'), {
      childList: true,
    });
  };

  render();
};
