import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Plan</h1>
  <ul>
    <li class="second-list">
      <h2>Development related list</h2>
      <ul>
        <li class="third-list">
          <p>Create a hip page.</p>
        </li>
      </ul>
    </li>
  </ul>
`;
export const plan = () => postMaker(contentMsg);
