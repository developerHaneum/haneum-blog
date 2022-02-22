export const router = (target, path, routes, routeTitles) => {
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routes[path]) {
    if (path === '/') {
    } else {
      // 404
      document.title = routeTitles['/404'];
      target.innerHTML = routes['/404']();
    }
    return;
  }
  if (!routeTitles[path]) {
    document.title = 'Haneum Blog';
  } else {
    document.title = routeTitles[path];
  }
  target.innerHTML = routes[path]();
  window.onpopstate = e => {
    if (!routes[window.location.pathname]) {
      document.title = routeTitles['/404'];
      target.innerHTML = routes['/404']();
      return;
    }
    if (!routeTitles[window.location.pathname]) {
      document.title = 'Haneum Blog';
    } else {
      document.title = routeTitles[window.location.pathname];
    }
    target.innerHTML = routes[window.location.pathname]();
  };
};
