import { postMaker } from '../components/postMaker';

const contentMsg = `
  <h1>To me.</h1>
  <ul>
    <li class="second-list">
      <p>나는 무었을 위해 생존하고 있는 가?</p>
      <p>내가 지켜야 하는 것은 무었인가?</p>
      <p>나는 누구를 위해 생존하고 있는 가?</p>
      <p>나는 사회의 봉사하며 살고 있는 가?</p>
      <p>내가 누구를 해코지하지 않았는 가?</p>
      <p>나는 너무 많은 물욕을 가지진 않았는 가?</p>
      <p>나는 나의 할 일을 실천하였는 가?</p>
    </li>
  </ul>
`;
export const toMe = () => postMaker(contentMsg);
