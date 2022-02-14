import './reset.css';
import './app.css';
import { router } from './router';
import { home } from './home.js';
import { notFoundPage } from './notFoundPage.js';

const root = document.querySelector('#root');
const routes = {
  // This is router link urls match and route content
  '/': home(),
  '/404': notFoundPage(),
};
const routesTitle = {
  '/': 'Haneum Blog',
  '/404': '404',
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
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
  });
  router(root, window.location.pathname, routes, routesTitle);
});

// Don't remove this code. This is for hot module
if (module.hot) {
  module.hot.accept();
}
