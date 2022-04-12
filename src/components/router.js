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
      target.innerHTML = ``;
      target.insertAdjacentHTML('afterbegin', routes['/404']());
    }
    return;
  }
  if (!routeTitles[path]) {
    // Do not exist title
    document.title = 'Haneum Blog';
  } else {
    document.title = routeTitles[path];
  }
  // Rendering
  target.innerHTML = ``;
  target.insertAdjacentHTML('afterbegin', routes[path]());
  window.onpopstate = e => {
    // go, back surveillance
    if (!routes[window.location.pathname]) {
      // 404
      document.title = routeTitles['/404'];
      target.innerHTML = ``;
      target.insertAdjacentHTML('afterbegin', routes['/404']());
      return;
    }
    if (!routeTitles[window.location.pathname]) {
      // Do not exist title
      document.title = 'Haneum Blog';
    } else {
      // If exist title
      document.title = routeTitles[window.location.pathname];
    }
    // Rendering
    target.innerHTML = ``;
    target.insertAdjacentHTML('afterbegin', routes[window.location.pathname]());
  };
};
