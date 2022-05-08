import { postMaker } from '../components/postMaker';

export const spotify = () => {
  const contentMsg = `
    스포티파이를 쓰면서 항상 느끼는 점은 사용자 중심의 UX 구성과 직관적인 UI가 고도화 되어 제공된다는 점이다.
    홈화면에 들어가면 플레이리스트를 제공해주는데, Spotify가 제공해주는 플레이리스트는 마음에 들지는 않지만,
    정말 UI가 다른 음원 사이트에 비해서 너무 이뻐서 사용하는 중이다.

    나도 언젠가는 스포티파이, 벨로그 같은 서비스를 런칭하여 사용자를 매료시키는 서비스를 구축해 나가고 싶다.
  `;
  const contents = {
    title: 'What I feel while using Spotify.',
    content: contentMsg,
  };
  postMaker(contents);
};
