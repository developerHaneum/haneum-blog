import { postMaker } from '../components/postMaker.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      My name is Cha Haneum, I am Korean, and I do Front-end development.
      
      I take simple and intuitive web development very seriously.
      It has to do with web accessibility and has a huge impact on UX.
      We also dream of a web world that can be used by everyone, from kindergarteners to the elderly.

      If you would like to see many articles on the blog, you can view more blog posts by clicking on <a href="/feed">the blog post title</a>.
      
      If you're curious about me, check out <a target="_blank" href="https://github.com/chebread">GitHub</a>.
    `;
    const contents = {
      title: 'Hi, Nice to meet you.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
