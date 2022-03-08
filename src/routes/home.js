import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Hi, Nice to meet you.</h1>
    <p>My name is Cha Haneum and I am Korean.</p>
    <p>And My job is Front-end developer.</p>
    <br/>
    <p>I really love basics JavaScript!</p>
    <br/>
    <p>I develop web applications using Vanilla JS and Express.js.</p>
    <p>However, sometimes I also develop web applications with React.js and React.js packages.</p>
    <br/>
    <p>If you are curious about my web application or information, please check <a href="https://github.com/developerHaneum">GitHub  </a> or check out <a href="/menu">more posts</a> on my blog.</p>
    <p>Also, to check more blog posts, click <a href="/menu">the Menu link</a> at the top or access <a href="/menu">/menu</a>.</p>
    <br/>
    <p>MIT License &copy; ${new Date().getFullYear()} Cha Haneum</p>
`;
export const home = () => postMaker(contentMsg);
