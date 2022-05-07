import { postMaker } from '../components/postMaker.js';

export const amI = () => {
  const render = () => {
    const contentMsg = `
      <p>I feel like I keep hurting someone.<br/>
      And. It's hard.</p>
      <p>Do I really need me in this world?</p>
    `;
    const contents = {
      title: 'Am I really needed in this world?',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
