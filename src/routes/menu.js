import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li class="second-list">
      <h2>Personal posts</h2>
      <ul>
        <li class="third-list">
          <p><a href="/">Hi, Nice to meet you.</a></p>
        </li>
      </ul>
      <br/>
      <h2>JavaScript related posts</h2>
      <ul>
          <li class="third-list">
              <p><a href="/js-spa">JavaScript로 SPA 구현하기.</a></p>
          </li>
      </ul>
      <br/>
      <h2>Functional programming related posts</h2>
      <ul>
          <li class="third-list">
              <p><a href="/fp-basics">Basics</a></p>
          </li>
      </ul>
  </ul>
`;
export const menu = () => postMaker(contentMsg);
