import { postMaker } from '../components/postMaker.js';
import { map } from 'fxjs';

const contentMsg = `
  <a href="/fp-basics">Fp bacis</a>
`;

export const menu = () => postMaker(contentMsg);
