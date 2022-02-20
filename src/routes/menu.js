import { postMaker } from '../components/postMaker.js';

const fpRefUrl = 'https://www.inflearn.com/course/functional-es6';
const algorithmRefUrl =
  'https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md';
const cleanCodeRefUrl =
  'https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md';
const cssFlexBoxRefUrl =
  'https://www.inflearn.com/course/css-flex-grid-제대로-익히기';
const contentMsg = `
    <h1>Blog posts</h1>
    <ul>
        <li class="second-list"><h2>Personal posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/">Hi, it's nice to meet you.</a></p>
                <p><a href="/my-principle">My principle.</a></p>
                <p><a href="/2021-targets">2021 목표 (Korean)</a></p>
                <p><a href="/favorite-music">My favorite music</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>JavaScript (ES6+) related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="/js-pushstate">pushState</a></p>
                <p><a href="/js-indexof">indexOf</a></p>
                <p><a href="/js-substring">substring</a></p>
            </li>
        </ur>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>JavaScript FP related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="${fpRefUrl}">Reference</a></p>
                <p><a href="/fp-basics">JavaScript 함수형 프로그래밍 기본기. (Koearn)</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>JavaScript algorithms related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="${algorithmRefUrl}">Reference</a></p>
                <p><a href="/algorithm-Basics">Basics</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>Clean code JavaScript related posts</h2></li>
        <ul>
            <li class="third-list">
               <p><a href="${cleanCodeRefUrl}">Reference</a></p>
            </li>
        </ul>
    </ul>
    <br/>
    <ul>
        <li class="second-list"><h2>CSS FlexBox related posts</h2></li>
        <ul>
            <li class="third-list">
                <p><a href="${cssFlexBoxRefUrl}">Reference</a></p>
                <p><a href="/css-flexbox-Basics">Basics</a></p>
            </li>
        </ul>
    </ul>
`;
export const menu = () => postMaker(contentMsg);
