import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Cafe reviews.</h1>
    <ul>
        <li class="second-list">
            <p>Ediya coffee: Americano :)</p>
            <p>Starbucks: Chocolate drink :)</p>
            <p>Tom&Toms: Fruit drink :)</p>
            <p>빽다방: 원조커피 :)</p>
        </li>
    </ul>
`;
export const whatShouldIDo = () => postMaker(contentMsg);
