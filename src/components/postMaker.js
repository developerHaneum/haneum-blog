import './content.css';
import { content } from './content.js';
import { renderHTML } from './renderHTML.js';

export const postMaker = contentMsg => {
  const render = () => {
    const contents = `
      ${content(contentMsg)}
    `;
    renderHTML(contents, document.querySelector('#root'));
    // Utterances processing
    const utterancesElement = document.createElement('script');
    utterancesElement.setAttribute('src', 'https://utteranc.es/client.js');
    utterancesElement.setAttribute('repo', 'chebread/haneum-blog');
    utterancesElement.setAttribute('issue-term', 'pathname');
    utterancesElement.setAttribute('theme', 'preferred-color-scheme');
    utterancesElement.setAttribute('crossorigin', 'anonymous');
    utterancesElement.setAttribute('async', '');
    document.querySelector('.container-comment').appendChild(utterancesElement);
    // Hover (state component) processing
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a').forEach(item => {
        item.addEventListener('mouseover', e => {
          if (e.target.parentNode.className === 'content-title') {
            if (
              window.matchMedia('(prefers-color-scheme: light)').matches ===
              true
            ) {
              e.target.style = 'color: white;';
            } else {
              e.target.style =
                'text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;';
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
      subtree: true,
    });
    // Hover processing
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener('mouseover', e => {
        if (e.target.parentNode.className === 'content-title') {
          if (
            window.matchMedia('(prefers-color-scheme: light)').matches === true
          ) {
            e.target.style = 'color: white;';
          } else {
            e.target.style =
              'text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;';
          }
        } else {
          e.target.style = 'text-decoration: underline;';
        }
      });
      item.addEventListener('mouseleave', e => (e.target.style = ''));
    });
  };
  render();
};
