import { renderHTML } from '../components/renderHTML.js';

export const serviceUnavailable = () => {
  const render = () => {
    const contentMsg = `
      <div class="nfp-content">
        <div class="nfp-content-wrapper">
          <div class="nfp-content-msg">
            <p>503 Service unavailable.</p>
            <p>The blog is being reorganized.</p>
            <p>There is little way to know when this error will recover.</p>
            <p>Please wait for a moment. Sorry.</p>
          </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
