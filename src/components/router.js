export const router = (target, path, routes, routeTitles) => {
  console.log();
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routes[path]) {
    if (path === '/') {
    } else {
      // 404
      document.title = routeTitles['/404'];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeTitles['/404']}`);
      document
        .querySelector('meta[property="og:url"]')
        .setAttribute(
          'content',
          `${window.location.protocol}//${window.location.host}${
            window.location.pathname === '/' ? '' : window.location.pathname
          }`
        );
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute('content', `${routeTitles['/404']}`);
      target.innerHTML = routes['/404']();
    }
    return;
  }
  if (!routeTitles[path]) {
    // Do not exist title
    document.title = 'Haneum Blog';
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', 'Haneum Blog');
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', 'Haneum Blog');
  } else {
    document.title = routeTitles[path];
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', `${routeTitles[`${window.location.pathname}`]}`);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', `${routeTitles[`${window.location.pathname}`]}`);
  }
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute(
      'content',
      `${window.location.protocol}//${window.location.host}${
        window.location.pathname === '/' ? '' : window.location.pathname
      }`
    );
  // Rendering
  target.innerHTML = routes[path]();
  window.onpopstate = e => {
    // go, back surveillance
    if (!routes[window.location.pathname]) {
      // 404
      document.title = routeTitles['/404'];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeTitles['/404']}`);
      document
        .querySelector('meta[property="og:url"]')
        .setAttribute(
          'content',
          `${window.location.protocol}//${window.location.host}${
            window.location.pathname === '/' ? '' : window.location.pathname
          }`
        );
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute('content', `${routeTitles['/404']}`);
      target.innerHTML = routes['/404']();
      return;
    }
    if (!routeTitles[window.location.pathname]) {
      // Do not exist title
      document.title = 'Haneum Blog';
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', 'Haneum Blog');
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute('content', 'Haneum Blog');
    } else {
      // Exist title
      document.title = routeTitles[window.location.pathname];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute(
          'content',
          `${routeTitles[`${window.location.pathname}`]}`
        );
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          'content',
          `${routeTitles[`${window.location.pathname}`]}`
        );
    }
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute(
        'content',
        `${window.location.protocol}//${window.location.host}${
          window.location.pathname === '/' ? '' : window.location.pathname
        }`
      );
    // Rendering
    target.innerHTML = routes[window.location.pathname]();
  };
};
