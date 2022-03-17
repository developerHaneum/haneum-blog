import { postMaker } from '../components/postMaker';

const contentMsg = `
    <h1>March.</h1>
    <p>※ This post will be continuously updated. </p>
    <br/>
    <p>3월은 내 생일과 개학이 있는 달이다.</p>
    <p>또한, 봄이 시작되는 달이다.</p>
    <br/>
    <p>블로그가 있으니 참으로 좋다.</p>
    <br/>
    <p><i>Madison Beer - reckless</i></p>
`;
export const march = () => postMaker(contentMsg);
