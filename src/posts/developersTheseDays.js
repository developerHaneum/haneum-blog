import { postMaker } from '../components/postMaker.js';

export const developersTheseDays = () => {
  const render = () => {
    const contentMsg = `
      I'm not insulting React.js. It's just insulting developers who develop so easily and only for profit.

      A front-end developer is someone who puts the user experience first and develops for the benefit of users.
      I sincerely hope that this will be reproduced frequently and that all front-end developers will develop only for users.
    `;
    const contents = {
      title: 'Developers these days.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
