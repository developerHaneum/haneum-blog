import { render } from './render.js';
import { statusCode } from './statusCode.js';

export const router = (target, path, routeContents) => {
  if (statusCode === 503) {
    document.title = routeContents['/503'].title;
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', `${routeContents['/503'].title}`);
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
      .setAttribute('content', `${routeContents['/503'].title}`);
    render(target, '/503');
    return;
  }
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (path === '/') {
    } else {
      // 404
      document.title = routeContents['/404'].title;
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeContents['/404'].title}`);
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
        .setAttribute('content', `${routeContents['/404'].title}`);
      render(target, '/404');
    }
    return;
  }
  if (!routeContents[path].title) {
    // Do not exist title
    document.title = 'Haneum Blog';
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', 'Haneum Blog');
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', 'Haneum Blog');
  } else {
    document.title = routeContents[path].title;
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute(
        'content',
        `${routeContents[`${window.location.pathname}`].title}`
      );
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute(
        'content',
        `${routeContents[`${window.location.pathname}`].title}`
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
  render(target, path);
  window.onpopstate = () => {
    // go, back surveillance
    if (!routeContents[window.location.pathname]) {
      // 404
      document.title = routeContents['/404'].title;
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute('content', `${routeContents['/404'].title}`);
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
        .setAttribute('content', `${routeContents['/404'].title}`);
      render(target, '/404');
      return;
    }
    if (!routeContents[window.location.pathname].title) {
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
      document.title = routeContents[window.location.pathname].title;
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute(
          'content',
          `${routeContents[`${window.location.pathname}`].title}`
        );
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          'content',
          `${routeContents[`${window.location.pathname}`].title}`
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
    render(target, window.location.pathname);
  };
};
