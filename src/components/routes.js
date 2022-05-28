import { feed } from '../routes/feed.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { hi } from '../posts/hi.js';
import { loveIs } from '../posts/loveIs.js';
import { cryptocurrency } from '../posts/cryptocurrency.js';

export const routes = {
  '/': {
    route: feed,
    title: 'Haneum Blog',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/hi': {
    route: hi,
    title: 'Hi, Nice to meet you.',
  },
  '/love-is': {
    route: loveIs,
    title: 'Love is.',
  },
  '/cryptocurrency': {
    route: cryptocurrency,
    title: 'Cryptocurrency.',
  },
};
