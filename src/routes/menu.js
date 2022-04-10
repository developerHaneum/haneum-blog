import { postMaker } from '../components/postMaker.js';
import { routeTitles } from '../components/routeContents.js';
const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li class="second-list">
      <h2>Personal posts</h2> 
      <ul>
        <li class="third-list">
          <p><a href="/">Hi, Nice to meet you.</a></p>
          <p><a href="/devil-putin">Devil Putin.</a></p>
          <p><a href="/love-is">Love is.</a></p>
          <p><a href="/plan">Plan.</a></p>
          <p><a href="/march">March.</a></p>
        </li>
      </ul>
  </ul>
`;
export const menu = () => postMaker(contentMsg);

// window.onload = () => {
//   const routes = Object.entries(routeTitles);
//   console.log(routes.length);
//   routes.forEach(e => {
//     const elem = document.createElement('li');
//     elem.classList.add('.thrid-list');
//     document.querySelector('ul').appendChild(elem);
//   });
//   document.querySelector('.thrid-list').innerHTML = `hle`;
// };
