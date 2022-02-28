import { postMaker } from '../components/postMaker.js';

const koreanPostIndication = '(Korean)';
const fpRefUrl = 'https://www.inflearn.com/course/functional-es6';
const contentMsg = `
    <h1>Blog posts</h1>
    <ul>
        <li class="second-list"><h2>Personal posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/">Hi, it's nice to meet you.</a></p>
                <p><a href="/ukraine-russia-war">Devil Putin. ${koreanPostIndication}</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>Git related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/git-commit-msg-rules">Git commit message rules ${koreanPostIndication}</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>Functional programming related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="${fpRefUrl}">Reference</a></p>
                <p><a href="/fp-basics">JavaScript functional programming basics ${koreanPostIndication}</a></p>
            </li>
        </ul>
    </ul>
`;
export const menu = () => postMaker(contentMsg);
