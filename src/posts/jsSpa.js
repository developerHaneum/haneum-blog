import { postMaker } from '../components/postMaker';

const contentMsg = `
    <h1>JavaScript로 SPA 구현하기.</h1>
    <h2>목차</h2>
    <ul>
        <li class="second-list">
            <p>주소 변경하기</p>
            <p>어플리케이션 내에서 이동시 세로고침 막기</p>
            <p>HTML 렌더링 하기</p>
            <p>존재하지 않는 주소 접근 제어하기</p>
        </li>
    </ul>
    <br/>
    <h2>주소 변경하기</h2>
    <p><code>pushState</code> 함수로 변경할 수 있다.</p>
`;
export const jsSpa = () => postMaker(contentMsg);
