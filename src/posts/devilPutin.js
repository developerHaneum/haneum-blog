import { postMaker } from '../components/postMaker.js';

export const devilPutin = () => {
  const render = () => {
    const contentMsg = `
      <p>나는 더이상 21세기에 전쟁은 일어 나지 않을 것이라고 믿었다.<br/>
      전쟁은 너무나 참혹하고 무섭고, 위협적이며 끔직하기 때문이다.</p>
      <p>하지만, 2월 20일 러시아 군은 우크라이나를 침공하였다.<br/>
      처음엔 믿지 않았다. 왜냐면 너무 비현실적이며 21세기는 전쟁은 일어나지 않는 다고 믿었기 때문이다.</p>
      <p>나는 푸틴은 히틀러와 다를게 없다고 생각한다. 현재 2월 28일 2월에 마지막 날에도 우크라이나의 무고한 시민들. 어린이들이 희생당하고 있기 때문이다.  <br/>
      그 시민들과 어린이들은 아무런 잘못을 하지 않았다. 하지만 푸틴에 의해 사살당하고 정신적으로 피해를 보았다.</p>
      <p>푸틴은 도대체 히틀러와 어떤점이 다른가? 수많은 시민들을 희생한 희틀러. 현재 수많은 시민을 희생하는 푸틴.<br/>
      나는 이 둘이 다를게 없다고 본다.</p>
    `;
    const contents = {
      title: 'Devil Putin.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
