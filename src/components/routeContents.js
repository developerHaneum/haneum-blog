import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { se } from '../posts/se.js';
import { feed } from '../routes/feed.js';

export const routeContents = {
  '/': {
    route: home,
    title: '',
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
  '/devil-putin': {
    route: devilPutin,
    title: 'Devil putin.',
  },
  '/se': {
    route: se,
    title: 'SE, I finally bought it.',
  },
};
