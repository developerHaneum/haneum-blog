import { routeContents } from './routeContents.js';

export const renderRoute = path => {
  if (!routeContents[path].title) {
    document.title = 'This is Haneum';
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
      .setAttribute('content', `${routeContents[path].title}`);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', `${routeContents[path].title}`);
  }
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute(
      'content',
      `${window.location.protocol}//${window.location.host}${
        window.location.pathname === '/' ? '' : window.location.pathname
      }`
    );
  routeContents[path].route();
};
