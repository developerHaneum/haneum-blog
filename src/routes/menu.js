import { postMaker } from '../components/postMaker.js';
// import { routeContents } from '../components/routeContents.js';

const contentMsg = `
  <h1>Blog posts</h1>
  <ul>
    <li id="menu-content" class="second-list">
      <p><a href="/">Hi, Nice to meet you.</a></p>
      <p><a href="/devil-putin">Devil Putin.</a></p>
      <p><a href="/love-is">Love is.</a></p>
      <p><a href="/se">SE</a></p>
      <p><a href="/what-should-i-do">What should I do.</a></p>
      <p><a href="/what-do-front-end-do">What do Front-end developer do?</a></p>
    </li>
  </ul>
`;
export const menu = () => postMaker(contentMsg);

// const log = console.log;
// const arr = routeContents;
// const list = document.querySelector('#menu-content');
// const titles = Object.keys(routeContents);
// for (let i = 0; i < titles.length; i++) {
//   list.innerHTML += `
//     <p><a href="${titles[i]}">${arr[titles[i]].title}</a></p>
//   `;
//   log(routeContents[titles[i]].title);
// }
