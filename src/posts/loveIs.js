import { postMaker } from '../components/postMaker.js';

export const loveIs = () => {
  const render = () => {
    const contentMsg = `
      <p>Love seems to be something that guides me on the right path.<br/>
      Also, it is like a candle that brightens me.</p>
    `;
    const contents = {
      title: 'Love is.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
