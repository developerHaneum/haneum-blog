import { postMaker } from '../components/postMaker.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <p>My name is Cha Haneum and I am Korean.<br/>
      And My job is Front-end developer.</p>
      <p>I develop web applications using basic JavaScript and Express.js.<br/>
      However, sometimes I also develop web applications with React.js and React.js packages.</p>
      <p>I always attach great importance to web accessibility and simple and intuitive web development.</br>
      I also dream of a web world where anyone from kindergarteners to the elderly can use it.</p>
      <p>If you are curious about my web application or information, please check <a href="https://github.com/chebread">GitHub</a> or send an <a href="mailto:chahaneum@icloud.com">email</a>.</br>
      You can also view more blog posts by clicking <a href="/feed">the blog posts title</a> (very easy), clicking <a href="/feed">/feed</a>, or typing <a href="/feed">/feed</a> after your domain.</p>
      <p>For reference, Haneum <a href="/about">(About Haneum)</a> created this blog and writes on this blog.</p>
    `;
    const contents = {
      title: 'Hi, Nice to meet you.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
