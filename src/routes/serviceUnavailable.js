import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1 style="font-size: 30px;">503 Service unavailable</h1>
  <p>The blog is being reorganized.</p>
  <p>There is little way to know when this error will recover.</p>
  <p>Please wait for a moment. Sorry.</p>
  <br/>
  <p>MIT License &copy; ${new Date().getFullYear()} Cha Haneum</p>
`;
export const serviceUnavailable = () => postMaker(contentMsg);
