import { postMaker } from '../components/postMaker.js';

const fpRefUrl = 'https://www.inflearn.com/course/functional-es6';
const algorithmRefUrl =
  'https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md';
const cleanCodeRefUrl =
  'https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md';
const cssFlexBoxRefUrl =
  'https://www.inflearn.com/course/css-flex-grid-제대로-익히기';
const contentMsg = `
    <ul>
        <li class="first-list"><h1>Blog posts</h1></li>
        <ul>
            <li class="second-list"><h2>Personal posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="/">Hi, it's nice to meet you.</a></p></li>
                <li class="third-list"><p><a href="/my-principle">My principle.</a></p></li>
                <li class="third-list"><p><a href="/blog-structure">How is this blog structured?</a></p></li>
                <li class="third-list"><p><a href="/2021-targets">2021 목표 (Korean)</a></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>JavaScript related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="/js-pushstate">pushState</a></p></li>
                <li class="third-list"><p><a href="/js-indexof">indexOf</a></p></li>
                <li class="third-list"><p><a href="/js-substring">substring</a></p></li>
            </ur>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>JavaScript functional programming related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="${fpRefUrl}">Reference</a></p></li>
                <li class="third-list"><p><a href="/fp-Basics">Basics</a></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>JavaScript algorithms related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="${algorithmRefUrl}">Reference</a></p></li>
                <li class="third-list"><p><a href="/algorithm-Basics">Basics</a></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>Clean code JavaScript related posts</h2></li>
            <ul>
                <li class="third-list"><p><li class="third-list"><p><a href="${cleanCodeRefUrl}">Reference</a></p></li></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>CSS FlexBox related posts</h2></li>
            <ul>
                <li class="third-list"><p><a href="${cssFlexBoxRefUrl}">Reference</a></p></li>
                <li class="third-list"><p><a href="/css-flexbox-Basics">Basics</a></p></li>
            </ul>
        </ul>
    <ul>
`;
export const menu = () => postMaker(contentMsg);
