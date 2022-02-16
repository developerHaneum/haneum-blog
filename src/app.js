import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { home } from './routes/home.js';
import { menu } from './routes/menu.js';
import { notFoundPage } from './routes/notFoundPage.js';
import { algorithmBasics } from './posts/algorithms/algorithmBasics.js';
import { algorithmStack } from './posts/algorithms/algorithmStack.js';
import { fpBasics } from './posts/fps/fpBasics.js';
import { fpFirstLevelFunction } from './posts/fps/fpFirstLevelFunction.js';

const root = document.querySelector('#root');
const routes = {
  '/': home,
  '/menu': menu,
  '/algorithm-basics': algorithmBasics,
  '/algorithm-stack': algorithmStack,
  '/fp-basics': fpBasics,
  '/fp-first-level-function': fpFirstLevelFunction,
  '/404': notFoundPage,
};
const routesTitle = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/algorithm-basic': 'JavaScript algorithm basic',
  '/algorithm-stack': 'JavaScript stack algorithm',
  '/fp-basic': 'JavaScript functional programming basic',
  '/fp-first-level-function':
    'JavaScript function programming first level function',
  '/404': '404 Not found page',
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
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
        routesTitle
      );
    }
  });
  router(root, window.location.pathname, routes, routesTitle);
});
