import { maker } from '../components/maker.js';

const contentMsg = `
    <h1>Hi, it's nice to meet you.</h1>
    <p>My name is Cha Haneum and I am Korean.</p>
    <p>And My job is Front-end developer.</p>
    <br/>
    <p>I do love Vanilla JS also I value web accessibility.</p>
    <br/>
    <p>I develop web applications using Vanilla JS and Express.js.</p>
    <p>However, sometimes I also develop web applications with React.js and React.js packages.</p>
    <br/>
    <p>If you are curious about my web application or information, please check <a href="https://github.com/developerHaneum">GitHub  </a> or check out <a href="/menu" class="inlink">more posts</a> on my blog.</p>
    <p>Also, to check more blog posts, click <a href="/menu" class="inlink">the Menu link</a> at the top or access <a href="/menu" class="inlink">/menu</a>.</p>
    <br/>
    <p>Attention, this web application does not support IE browser.</p>
    <p>And depending on the user's environment, the web application may be unstable.</p>
    <br/>
    <p>MIT License &copy; ${new Date().getFullYear()} Cha Haneum</p>
`;
export const home = () => maker(contentMsg);
