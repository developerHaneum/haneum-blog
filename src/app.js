import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { routeContents } from './components/routeContents.js';

const root = document.querySelector('#root');
document.addEventListener('DOMContentLoaded', () => {
  // For mobile height (100vh)
  document.body.addEventListener('click', e => {
    if (e.target.localName === 'a') {
      if (
        ((routeContents[
          e.target.href.substring(
            e.target.href.indexOf('/', 8),
            e.target.href.length
          )
        ] ===
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
});
