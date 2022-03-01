import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Cafe.</h1>
    <p>Cafe에 오면 개발이 잘된다.</p>
    <p>플라세보효과인가? 정말 개발은 Cafe에서는 너무 잘된다.</p>
    <br/>
    <p>하지만, 중요한 프로젝트는 집에서 하는것이 백배나은것 같기도 하다.</p>
    <p>하지만, 보수할때는 Cafe에서하는 것이 백배낫다.</p>
    <br/>
    <p>장인은 도구를 탓하지 않는 이유는 잘 선택해서 그런것같기도 하다.</p>
`;
export const cafe = () => postMaker(contentMsg);
