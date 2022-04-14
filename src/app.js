import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { routeContents } from './components/routeContents.js';
import { checkHeight } from './components/checkHeight.js';

let time;
console.time(time);
const root = document.querySelector('#root');
document.addEventListener('DOMContentLoaded', () => {
  // For mobile height (100vh)
  checkHeight();
  window.addEventListener('resize', () => checkHeight());
  document.body.addEventListener('click', e => {
    if (e.target.localName === 'a') {
      if (
        ((routeContents[
          e.target.href.substring(
            e.target.href.indexOf('/', 8),
            e.target.href.length
          )
        ][0] ===
          undefined) ===
          false) ===
        true
      ) {
        // for outlink
        e.preventDefault();
        router(
          root,
          e.target.href.substring(
            e.target.href.indexOf('/', 8),
            e.target.href.length
          ),
          routeContents
        );
      }
      return;
    }
  });
  router(root, window.location.pathname, routeContents);
  console.timeEnd(time);
});
