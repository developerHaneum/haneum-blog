export const router = (target, path, routes, routesTitle) => {
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routes[path]) {
    if (path === '/') {
    } else {
      document.title = routesTitle['/404'];
      target.innerHTML = routes['/404']();
    }
    return;
  }
  window.onpopstate = e => {
    if (!routes[window.location.pathname]) {
      document.title = routesTitle['/404'];
      target.innerHTML = routes['/404']();
      return;
    }
    document.title = routesTitle[window.location.pathname];
    target.innerHTML = routes[window.location.pathname]();
  };
  document.title = routesTitle[path];
  target.innerHTML = routes[path]();
};
