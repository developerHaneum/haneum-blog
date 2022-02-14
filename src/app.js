import './reset.css';
import './app.css';
import { router } from './components/router';
import { home } from './routes/home.js';
import { menu } from './routes/menu.js';
import { deployVercel } from './routes/deployVercel.js';
import { notFoundPage } from './routes/notFoundPage.js';

const root = document.querySelector('#root');
const routes = {
  // This is router link urls match and route content
  '/': home(),
  '/menu': menu(),
  '/deploy-vercel': deployVercel(),
  '/404': notFoundPage(),
};
const routesTitle = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/deploy-vercel': 'Deploy with Vercel',
  '/404': '404 Not found page',
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.className === 'inlink') {
      // e.target의 class가 inlink 라면 SPA를 동작시킨다. outlink때문에 기능추가.
      // a href를 클릭 했다면.
      e.preventDefault();
      // e.target.href 는 https:// ... 부터 시작되니 이 부분을 삭제한 그 다음의 문자열을 가지고 와야한다.
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
