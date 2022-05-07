import { postMaker } from '../components/postMaker.js';

export const diggingInsertAdjacentHTML = () => {
  const render = () => {
    const contentMsg = `
      <blockquote><code>insertAdjacentHTML()</code> 메서드는 HTML 이나 XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가 한다. 이미 사용중인 element 는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다.</blockquote>
    `;
    const contents = {
      title: 'Digging into insertAdjacentHTML',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
