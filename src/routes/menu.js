import { maker } from '../components/maker.js';

const fpRefUrl = 'https://www.inflearn.com/course/functional-es6';
const algorithmRefUrl =
  'https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md';
const cleanCodeRefUrl =
  'https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md';
const contentMsg = `
    <ul>
        <li class="first-list"><h1>Blog posts</h1></li>
        <ul>
            <li class="second-list"><h2>Personal posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="/">Hi, it's nice to meet you.</a></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>JavaScript functional programming related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="${fpRefUrl}">Reference</a></p></li>
                <li class="third-list"><p><a href="/fp-basics">basics</a></p></li>
                <li class="third-list"><p><a href="/fp-first-level-function">First level function</a></p></li>
            </ul>
        <ul>
        <br/>
        <ul>
            <li class="second-list"><h2>JavaScript algorithms related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="${algorithmRefUrl}">Reference</a></p></li>
                <li class="third-list"><p><a href="/algorithm-basics">basics</a></p></li>
                <li class="third-list"><p><a href="/algorithm-stack">Stack</a></p></li>
            </ul>
        <ul>
        <br/>
        <ul>
            <li class="second-list"><h2>Clean code JavaScript related posts</h2></li>
            <ul>
                <li class="third-list"><p><li class="third-list"><p><a href="${cleanCodeRefUrl}">Reference</a></p></li></p></li>
            </ul>
        <ul>
    </ul>
`;
export const menu = () => maker(contentMsg);
