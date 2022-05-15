import { postMaker } from '../components/postMaker.js';

export const myself = () => {
  const contentMsg = `
    <blockquote>INFJ는 전 세계의 1%도 채 안되는 극소수 유형이며 인내심이 많고 통찰력과 직관력이 매우 뛰어나며 화합을 추구한다.</blockquote>
  `;
  const contents = {
    title: 'Myself.',
    content: contentMsg,
  };
  postMaker(contents);
};
