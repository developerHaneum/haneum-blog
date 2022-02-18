import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>My principle.</h1>
    <p>I will change the world for good.</p>
    <p>And I will make good progress and contribution for the whole world :)</p>
`;
export const myPrinciple = () => postMaker(contentMsg);
