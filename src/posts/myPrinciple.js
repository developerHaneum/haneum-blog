import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>My principle.</h1>
    <p><b>I will change the world for good.</b></p>
    <p><b/>And I will make good progress and contribution for the whole world :)</b></p>
    <br/>
    <p>Also No one knows tomorrow until tomorrow comes.</p>
    <p>So I have to keep trying.</p>
`;
export const myPrinciple = () => postMaker(contentMsg);
