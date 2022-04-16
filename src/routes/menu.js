import { postMaker } from '../components/postMaker.js';
import { routeContents } from '../components/routeContents.js';

const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li id="print" class="second-list">

    </li>
  </ul>
`;
export const menu = () => postMaker(contentMsg);
// ${routeContents.map(a => {
//   `<p><a href="${Object.keys(a)[i]}">${a[Object.keys(a)[i]].title}</a></p>`;
// })}
