import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Love is.</h1>
    <p>Love seems to be something that guides me on the right path.</p>
    <p>Also, it is like a candle that brightens me.</p>
    <br/>
    <p>사랑이란 나를 바른길로 인도해 주는 존재인 것 같다.</p>
    <p>또한, 나를 환하게 밝혀주는 하나의 촛불 같다.</p>
`;
export const loveIs = () => postMaker(contentMsg);
