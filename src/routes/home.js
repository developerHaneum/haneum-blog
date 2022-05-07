import { postMaker } from '../components/postMaker.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <p>My name is Haneum Cha, I am Korean, and I do frontend development.</p>
      <p>I take simple and intuitive web development very seriously.<br/>
      It has to do with web accessibility and has a huge impact on UX. <br/>
      We also dream of a web world that can be used by everyone, from kindergarteners to the elderly.</p>
      <p>If you would like to see many articles on the blog,<br/>
      you can view more blog posts by clicking on <a href="/feed">the blog post title</a>.</p>
      <p>If you're curious about me, check out <a href="https://github.com/chebread">GitHub</a>.</p>
    `;
    const contents = {
      title: 'Hi, Nice to meet you.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
