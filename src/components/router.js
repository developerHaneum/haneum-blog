import { render } from './render.js';
import { routeContents } from './routeContents.js';

export const router = (target, path) => {
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (path === '/') {
    } else {
      render(target, '/404');
    }
    return;
  }
  render(target, path);
  window.onpopstate = () => {
    if (!routeContents[window.location.pathname]) {
      render(target, '/404');
      return;
    }
    render(target, window.location.pathname);
  };
};
