import { postMaker } from '../components/postMaker';

const contentMsg = `
  <h1>My analects</h1>
  <ul>
    <li class="second-list">
      <p>세상에는 뛰어난 사람들이 많다.</p>
    </li>
  </ul>
`;
export const myAnalects = () => postMaker(contentMsg);
