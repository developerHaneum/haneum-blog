import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Hi, Nice to meet you.</h1>
  <p>My name is Cha Haneum and I am Korean.</p>
  <p>And My job is Front-end developer.</p>
  <br/>
  <p>I develop web applications using basic JavaScript and Express.js.</p>
  <p>However, sometimes I also develop web applications with React.js and React.js packages.</p>
  <br/>
  <p>I always attach great importance to web accessibility and simple and intuitive web development.</p>
  <p>I also dream of a web world where anyone from kindergarteners to the elderly can use it.</p>
  </p>
  <br/>
  <p>If you are curious about my web application or information, please check <a href="https://github.com/chebread">GitHub</a> or send an <a href="mailto:chahaneum@icloud.com">email</a>.</p>
  <p>Also, to check more blog posts, click <a href="/menu">the Menu link</a> at the top or access <a href="/menu">/menu</a>.</p>
  <br/>
  <p>Also, if you'd like to see a cleanup of my front-end skills, see <a href="https://haneum.notion.site/Front-end-technologies-be5a30d863f34d4d87a528f6abf48e8c">my Notion.</a></p>
  <br/>
  <p>MIT License &copy; ${new Date().getFullYear()} Cha Haneum</p>
`;
export const home = () => postMaker(contentMsg);
