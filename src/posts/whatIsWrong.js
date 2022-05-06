import { postMaker } from '../components/postMaker.js';

export const whatIsWrong = () => {
  const render = () => {
    const contentMsg = `
      <p>No matter how much I think about it, I don't know what I'm doing wrong.<br/>
      Just don't like me? Or is there some other reason?</p>
      <p>Please say something. Don't avoid it, just listen to me once.<br/>
      I can't let you go like this Please know my sincerity just once.</p>
      <p>I am different from other children. Do you know?<br/>
      I can give everything for you I can die for you.<p>
      <p>Please, just look at me once. Please.</p>
    `;
    const contents = {
      title: "What's wrong with me?",
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
