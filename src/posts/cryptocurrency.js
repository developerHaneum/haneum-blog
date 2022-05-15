import { postMaker } from '../components/postMaker.js';

export const cryptocurrency = () => {
  const contentMsg = `
    Hello


    yes!
    hello
  `;
  const contents = {
    title: 'Cryptocurrency.',
    content: contentMsg,
  };
  postMaker(contents);
};
