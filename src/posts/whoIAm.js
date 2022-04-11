import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Who I am?</h1>
  <p>I am just an normal Front-end developer.</p>
`;
export const whoIAM = () => postMaker(contentMsg);
