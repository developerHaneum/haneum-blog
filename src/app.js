import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { routes, routeTitles } from './components/routes.js';

const root = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.localName === 'a') {
      if (
        ((routes[
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
          routes,
          routeTitles
        );
      }
      return;
    }
  });
  router(root, window.location.pathname, routes, routeTitles);
});
