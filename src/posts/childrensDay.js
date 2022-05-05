import { postMaker } from '../components/postMaker.js';

export const childrensDay = () => {
  const render = () => {
    const contentMsg = `
      <p>I went to an amusement park alone on Children's Day in 2022.<br/>
       I only saw animals, but it was very fun.</p>
       <p>Because of the 100th anniversary of Children's Day / 20th anniversary of O-World, held around 1pm.</p>
       <p>The event had a family play. (It was really fun to see a father who was good at dancing.)<br/>
       Also, there was a dance performance, and the dancers danced very well. Those memories still remain strong.</p>
      <p>2022년 어린이날에는 혼자 놀이공원에 갔다.<br/>
      동물들만 봤지만, 굉장히 재밌었다.</p>
      <p>왜냐면, 1시쯤에 진행된 어린이날 100주년 / 오월드 창설 20주년 기념 행사 때문이다.</p>
      <p>그 행사에는 가족끼리 나와서 하는 놀이가 있었다. (춤을 잘 추시는 한 아버지가 나와서 참 재밌었다.)<br/>
      또, 댄스 공연이 있었는데 댄서분들이 굉장히 춤을 잘 추셨다. 아직도 그 기억이 강렬하게 남아있다.</p>
    `;
    const contents = {
      title: "Children's Day",
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
