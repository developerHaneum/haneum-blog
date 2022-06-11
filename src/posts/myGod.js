import postMaker from '../components/postMaker.js';

export const myGod = () => {
  const contentMsg = `
    감사합니다. 하느님 아버지!
  `;
  const contents = {
    title: 'Oh my god.',
    content: contentMsg,
  };
  postMaker(contents);
};
