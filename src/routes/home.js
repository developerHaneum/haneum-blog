import { postMaker } from '../components/postMaker.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <p>My name is Cha Haneum, I am Korean, and I do Fron-tend development.</p>
      <p>I take <b>simple and intuitive</b> web development very seriously.<br/>
      It has to do with web accessibility and has a huge impact on <b>UX</b>. <br/>
      We also dream of a web world that can be used by everyone, from kindergarteners to the elderly.</p>
      <p>If you would like to see <b>many articles</b> on the blog,<br/>
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
