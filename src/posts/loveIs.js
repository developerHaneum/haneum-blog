import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <p>Love seems to be something that guides me on the right path.<br/>
  Also, it is like a candle that brightens me.</p>
  <p>사랑이란 나를 바른길로 인도해 주는 존재인 것 같다.<br/>
  또한, 나를 환하게 밝혀주는 하나의 촛불 같다.</p>
`;
const contents = {
  title: 'Love is.',
  content: contentMsg,
};
export const loveIs = () => postMaker(contents);
