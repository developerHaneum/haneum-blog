import { postMaker } from '../components/postMaker.js';

export const about = () => {
  const contentMsg = `
    현재의 개발자란 세상을 바꿀 수 있는 사람들이라고 생각합니다.

    그치만, 개발자는 세상을 선하게 바꿀 수도 있고, 나쁘게 바꿀 수도 있습니다. 만약, 이익을 위해 개발하는 사람들이라고 한다면, 세상을 나쁘게 발전시키겠지요. 하지만, 오직 이익을 위해 개발하지 않고, 세상을 위해 개발한다면 그들이 진정한 개발자라고 생각합니다.

    이 세상은 우리가 살고 있는 은하에서 본다면 정말 원자의 전자보다 작은 존재입니다. 그러니 이 세상을 위해 조금만 더 힘쓰는게 좋지 않을까요? 진정한 개발자가 되고 싶다면, 저는 이 신념을 먼저 세기는 것을 시작으로 개발자가 되어야 한다고 생각합니다.

    감사합니다.
    
  `;
  const contents = {
    title: 'About developer.',
    content: contentMsg,
  };
  postMaker(contents);
};
