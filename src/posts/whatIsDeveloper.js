import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>What is developer?</h1>
  <p>I believe that developers are a profession with moral responsibility.</p>
  <p>Also, I don't think developing for money is the right developer.</p>
`;
export const whatIsDeveloper = () => postMaker(contentMsg);
