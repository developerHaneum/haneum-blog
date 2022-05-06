import { postMaker } from '../components/postMaker.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <p>Hello. My name is Cha Haneum (In Korean, it is written as 차한음).<br/>
      I am Korean, I am doing front-end development.</p>
      <p>I take simple and intuitive web development very seriously.<br/>
      It has to do with web accessibility and has a huge impact on UX.</p>
      <p>Also, I dream of a web world where everyone from kindergarteners to the elderly can use.<br/>
      This is my biggest goal and one of my challenges.</p>
      <p>If you would like to see many posts from your blog,<br/>
      you can view more blog posts by clicking on <a href="/feed">the blog post title</a> (very easy), by clicking on <a href="/feed">/feed</a> or by typing <a href="/feed">/feed</a> after your domain.</p>
      <p>If you're curious, check out <a href="https://github.com/chebread">GitHub</a>.</br>
      For reference, Haneum created this blog and writes on this blog.</p>
    `;
    const contents = {
      title: 'Hi, Nice to meet you.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
