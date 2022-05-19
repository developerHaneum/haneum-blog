import { home } from '../routes/home.js';
import { feed } from '../routes/feed.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { loveIs } from '../posts/loveIs.js';
import { reason } from '../posts/reason.js';
import { cryptocurrency } from '../posts/cryptocurrency.js';
import { about } from '../posts/about.js';

export const routeContents = {
  '/': {
    route: home,
    title: 'Haneum Blog',
  },
  '/feed': {
    route: feed,
    title: 'Feed',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/503': {
    route: serviceUnavailable,
    title: '503 Service unavailable',
  },
  '/love-is': {
    route: loveIs,
    title: 'Love is.',
  },
  '/reason': {
    route: reason,
    title: 'Reason.',
  },
  '/cryptocurrency': {
    route: cryptocurrency,
    title: 'Cryptocurrency.',
  },
  '/about': {
    route: about,
    title: 'About developer.',
  },
};
