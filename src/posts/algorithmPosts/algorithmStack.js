import { maker } from '../../components/maker.js';

const stackImgUrl = `https://camo.githubusercontent.com/7163784baed9e988949a1dfbf1e749eac91ea38cd1f738ec5094469f22242675/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62342f4c69666f5f737461636b2e706e67`;
const contentMsg = `
    <h1>JavaScript stack algorithm</h1>
    <p>스택은 아래의 두 가지 연산을 가진 요소들의 집합인 추상 자료형입니다.</p>
    <br/>
    <p>Push: 집합에 요소를 추가하는 것</p>
    <p>Pop: 아직 제거되지 않은 가장 최근에 추가된 요소를 제거하는 연산</p>
    <br/>
    <a href="${stackImgUrl}">Reference</a>
`;
export const algorithmStack = () => maker(contentMsg);
