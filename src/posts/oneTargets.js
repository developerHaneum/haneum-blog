import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>2021 목표</h1>
    <ul>
        <li class="second-list"><p>이제 돈좀 벌어봅시다! (Let's make some money!)</p></li>
        <li class="second-list"><p>Airpods Pro 사기.</p></li>
        <li class="second-list"><p>자체 플렛폼으로 MAU 100명 달성하기.</p></li>
        <li class="second-list"><p class="strike">Vanilla JS + Express.js로 SPA 개인 블로그 만들기.</p></li>
    </ul>
`;
export const oneTargets = () => postMaker(contentMsg);
