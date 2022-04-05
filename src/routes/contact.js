import '../components/form.css';
import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Contact</h1>
    <div class="form">
        <form>
           <div class="input-box">
            <textarea></textarea>
           </div>
        </form>
    </div>
`;
export const contact = () => postMaker(contentMsg);
