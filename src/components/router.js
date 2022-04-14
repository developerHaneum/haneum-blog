export const router = (target, path, routeContents) => {
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (path === '/') {
    } else {
      // 404
      document.title = routeContents['/404'][1];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeContents['/404'][1]}`);
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
        .setAttribute('content', `${routeContents['/404'][1]}`);
      target.innerHTML = ``;
      target.insertAdjacentHTML('afterbegin', routeContents['/404'][0]());
    }
    return;
  }
  if (!routeContents[path][1]) {
    // Do not exist title
    document.title = 'Haneum Blog';
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', 'Haneum Blog');
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', 'Haneum Blog');
  } else {
    document.title = routeContents[path][1];
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute(
        'content',
        `${routeContents[`${window.location.pathname}`][1]}`
      );
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute(
        'content',
        `${routeContents[`${window.location.pathname}`][1]}`
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
  target.innerHTML = ``;
  target.insertAdjacentHTML('afterbegin', routeContents[path][0]());
  window.onpopstate = e => {
    // go, back surveillance
    if (!routeContents[window.location.pathname]) {
      // 404
      document.title = routeContents['/404'][1];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeContents['/404'][1]}`);
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
        .setAttribute('content', `${routeContents['/404'][1]}`);
      target.innerHTML = ``;
      target.insertAdjacentHTML('afterbegin', routeContents['/404'][0]());
      return;
    }
    if (!routeContents[window.location.pathname][1]) {
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
      document.title = routeContents[window.location.pathname][1];
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute(
          'content',
          `${routeContents[`${window.location.pathname}`][1]}`
        );
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          'content',
          `${routeContents[`${window.location.pathname}`][1]}`
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
    target.innerHTML = ``;
    target.insertAdjacentHTML(
      'afterbegin',
      routeContents[window.location.pathname][0]()
    );
  };
};
