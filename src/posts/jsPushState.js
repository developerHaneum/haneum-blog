import { postMaker } from '../components/postMaker.js';
const contentMsg = `
    <h1>JavaScript pushState function</h1>
    <p><code>pushState(state, title, url)</code> 로 사용할 수  있으며,</p>
    <p>state는 상태값을 의미하고, title은 변경할 title을 의미하며, url은 변경할 주소를 의미합니다.</p>
    <br/>
    <p><a href="https://developer.mozilla.org/ko/docs/Web/API/History/pushState">Reference</a></p>
`;
export const jsPushState = () => postMaker(contentMsg);
