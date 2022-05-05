import './notFoundPage.css';
import { renderHTML } from '../components/renderHTML.js';

export const serviceUnavailable = () => {
  const render = () => {
    const contentMsg = `
      <div class="nfp-container">
        <div class="nfp-container-wrapper">
          <div class="nfp-container-content">
            <p>503 Service unavailable.</p>
            <p>The blog is being reorganized.</p>
            <p>There is little way to know when this error will recover.</p>
            <p>Please wait for a moment. Sorry.</p>
          </div>
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
