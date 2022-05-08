import { postMaker } from '../components/postMaker.js';

export const loveIs = () => {
  const render = () => {
    const contentMsg = `
      Love seems to be something that guides me on the right path.
      Also, it is like a candle that brightens me.
    `;
    const contents = {
      title: 'Love is.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
