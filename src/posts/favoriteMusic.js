import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>My favorite music</h1>
    <ul>
        <li class="second-list"><p>Peaunt butter - easy life</p></li>
        <li class="second-list"><p>Boat - 죠지</p></li>
        <li class="second-list"><p>Cheap flight - prep</p></li>
        <li class="second-list"><p>자장가 - 아이유 (IU)</p></li>
        <li class="second-list"><p>Blueming - 아이유 (IU)</p></li>
        <li class="second-list"><p>삐삐 - 아이유 (IU)</p></li>
    </ul>
`;
export const favoriteMusic = () => postMaker(contentMsg);
