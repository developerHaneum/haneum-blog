import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>What should I do.</h1>
  <ul>
    <li class="second-list">
      <p>그녀의 인생에서 후회되지 않을 기억을 남겨줄 수 있는가?</p>
      <p>그녀가 나의 인생에서 가장 큰 영역을 차지 할 수 있는가?</p>
      <p>이 기억을 책임 질 수 있는가?</p>
      <p>끊임 없이 함께 할 수 있는가?</p>
      <p>나를 그녀에게 바칠 수 있는가?</p>
      <p>그녀를 존중하는가?</p>
      <p>그녀의 인생에서 걸림돌이 되진 않는가?</p>
      <p>내 인생에서 가장 중요하는 가?</p>
      <p>모든 것을 바칠 수 있는 가?</p>
    </li>
  </ul>
`;
export const whatShouldIDo = () => postMaker(contentMsg);
