import { renderHTML } from '../components/renderHTML.js';

export const rpsGame = () => {
  const render = () => {
    const contentMsg = `
      
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
