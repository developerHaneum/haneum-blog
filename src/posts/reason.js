import { postMaker } from '../components/postMaker';

export const reason = () => {
  const contentMsg = `
    I can't have her because she's so perfect.
    But, could he have been perfect to have her?

    Am I just missing an opportunity? Or is this my fate?
  `;
  const contents = {
    title: 'Reason.',
    content: contentMsg,
  };
  postMaker(contents);
};
