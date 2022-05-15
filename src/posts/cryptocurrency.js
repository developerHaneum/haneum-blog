import { postMaker } from '../components/postMaker.js';

export const cryptocurrency = () => {
  const contentMsg = `hello
  ueh
yes!`;
  const contents = {
    title: 'Cryptocurrency.',
    content: contentMsg,
  };
  postMaker(contents);
};
