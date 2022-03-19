import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>SE, I finally bought it.</h1>
    <p>2021년 3월 19일 SE를 드디어 구매했다.</p>
    <p>색상은 이쁜 프로덕트 레드 색상을 구매하였고, 메모리 용량은 넉넉하게 128GB로 구매했다.</p>
    <br/>
    <p>사전 예약으로 구매하여 기다려야 하지만, 내돈으로 구매하니 참으로 설렌다.</p>
    <p>사진도 많이 찍고 그래야 겠다.</p>
`;
export const se = () => postMaker(contentMsg);
