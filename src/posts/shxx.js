import { postMaker } from '../components/postMaker.js';

export const shxx = () => {
  const render = () => {
    const contentMsg = `
    <p>Why do I always pick the wrong path? Dxxn it.<br/>
    I really wanted to protect her. But she also lost her this time.</p>
    <p>How can I get her back to me? by my ability? Or is it my appearance? I still don't know how. Dxxn it</p>
    <p>Is this the law of human?</p>
    `;
    const contents = {
      title: 'Shxx.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
