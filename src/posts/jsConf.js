import { postMaker } from '../components/postMaker.js';

export const jsConf = () => {
  const contentMsg = `
    JSConf Korea가 이번년도 9월달에 개회한다고 하는데요,
    정말 이번 JSConf 2022는 가고 싶습니다...

    멋진 강연과 굿즈를 받아오고 싶네요...
    이번년도에 처음 가보는 거지만, JSConf 2022 꼭 표 당첨되면 좋겠습니다!
  `;
  const contents = {
    title: 'JSConf.',
    content: contentMsg,
  };
  postMaker(contents);
};
