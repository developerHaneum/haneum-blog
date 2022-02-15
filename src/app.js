import './reset.css';
import './app.css';
import { router } from './components/router.js';
import { home } from './routes/home.js';
import { menu } from './routes/menu.js';
import { notFoundPage } from './routes/notFoundPage.js';
import { algorithmBasic } from './posts/algorithmPosts/algorithmBasic.js';
import { algorithmStack } from './posts/algorithmPosts/algorithmStack.js';

const root = document.querySelector('#root');
const routes = {
  '/': home(),
  '/menu': menu(),
  '/algorithm-basic': algorithmBasic(),
  '/algorithm-stack': algorithmStack(),
  '/404': notFoundPage(),
};
const routesTitle = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/algorithm-basic': 'JavaScript basic algorithm',
  '/algorithm-stack': 'JavaScript stack algorithm',
  '/404': '404 Not found page',
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.className === 'inlink') {
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
