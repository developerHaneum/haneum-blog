import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li class="second-list">
      <h2>Personal posts</h2>
      <ul>
        <li class="third-list">
          <p><a href="/">Hi, Nice to meet you.</a></p>
          <p><a href="/what-is-developer">What is developer?</a></p>
        </li>
      </ul>
  </ul>
`;
export const menu = () => postMaker(contentMsg);
