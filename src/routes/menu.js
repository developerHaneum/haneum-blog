import { postMaker } from '../components/postMaker.js';

const fpRefUrl = 'https://www.inflearn.com/course/functional-es6';
const algorithmRefUrl =
  'https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md';
const cleanCodeRefUrl =
  'https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md';
const cssFlexBoxRefUrl =
  'https://www.inflearn.com/course/css-flex-grid-제대로-익히기';
const koreanPostIndication = '(Korean)';
const contentMsg = `
    <h1>Blog posts</h1>
    <ul>
        <li class="second-list"><h2>Personal posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/">Hi, it's nice to meet you.</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>Git related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/git-commit-msg-rule">Git commit message 규칙 ${koreanPostIndication}</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>Functional programming related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="${fpRefUrl}">Reference</a></p>
                <p><a href="/fp-basics">JavaScript 함수형 프로그래밍 기본기 ${koreanPostIndication}</a></p>
            </li>
        </ul>
    </ul>
`;
export const menu = () => postMaker(contentMsg);
