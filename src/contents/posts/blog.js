import { postMaker } from '../../components/postMaker.js';
export const blog = () => {
  const contentMsg = `
    블로그에 댓글 기능이 없는 이유는 기술 관련 블로그는 올리지 않고 개인적인 견해만 올려서입니다.
    그래서 댓글 기능이 없습니다.

    기술 관련 블로그는 <a href="https://velog.io/@haneum">여기서</a> 확인할 수 있습니다.
  `;
  const contents = {
    title: 'About this blog.',
    content: contentMsg,
  };
  postMaker(contents);
};
