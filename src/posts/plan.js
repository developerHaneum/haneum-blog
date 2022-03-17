import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Plan</h1>
  <p>※ This post will be continuously updated.</p>
  <br/>
  <ul>
    <li class="second-list">
      <p>쌍방향 웹 어플리케이션 개발</p>
      <p>자체 플랫폼 MAU 1000명 도달하기</p>
    </li>
  </ul>
`;
export const plan = () => postMaker(contentMsg);
