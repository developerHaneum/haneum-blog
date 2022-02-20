import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>목표</h1>
    <ul>
        <li class="second-list">
            <p>1학기 평균 2등급 맞기.</p>
            <p>Airpods Pro 사기.</p>
            <p>자체 플렛폼으로 MAU 100명 달성하기.</p>
            <p class="strike">Vanilla JS + Express.js로 SPA 개인 블로그 만들기.</p>
            <p>우아한형제들 (Front-end 직군) 들어가기.</p>
        </li>
    </ul>
`;
export const targets = () => postMaker(contentMsg);
