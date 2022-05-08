import { postMaker } from '../components/postMaker.js';

export const aboutCrelement = () => {
  const contentMsg = `
    <blockquote>This is a converter that creates an HTML string in the DOM using createElement.</blockquote>

    <a href="https://github.com/chebread/crelement">crelement</a>는 HTML 문자열을 <code>tag</code> 단위로 나누어, <code>createElement</code>를 하여, DOM에 HTML 문자열을 효과적으로 렌더링하는 그러한 유틸리티라고 보면 됩니다.
  `;
  const contents = {
    title: 'About crelement.',
    content: contentMsg,
  };
  postMaker(contents);
};
