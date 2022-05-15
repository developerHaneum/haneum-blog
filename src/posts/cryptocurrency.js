import { postMaker } from '../components/postMaker.js';

export const cryptocurrency = () => {
  const contentMsg = `hello

  hello
    `;
  const contents = {
    title: 'Cryptocurrency.',
    content: contentMsg,
  };
  postMaker(contents);
};
