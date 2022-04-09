import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { routes, routeTitles } from './components/routeContents.js';

const checkHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
const root = document.querySelector('#root');
const statusCode = 503;
document.addEventListener('DOMContentLoaded', () => {
  // For mobile height
  checkHeight();
  window.addEventListener('resize', () => checkHeight());
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
          routeTitles,
          statusCode
        );
      }
      return;
    }
  });
  router(root, window.location.pathname, routes, routeTitles, statusCode);
});
