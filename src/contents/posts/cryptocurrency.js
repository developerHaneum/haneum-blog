import { postMaker } from '../../components/postMaker.js';

export const cryptocurrency = () => {
  const contentMsg = `
    Is <a href="https://ko.wikipedia.org/wiki/암호화폐">cryptocurrency</a> really a viable idea? Or is it a gambling board that has lost its essence?
    Can cryptocurrency itself become useful in the world, rather than simply converting cryptocurrency into general currency?

    Who will bring the cryptocurrency innovation?
  `;
  const contents = {
    title: 'Cryptocurrency.',
    content: contentMsg,
  };
  postMaker(contents);
};
