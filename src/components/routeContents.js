import { feed } from '../routes/feed.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { hi } from '../contents/posts/hi.js';
import { loveIs } from '../contents/posts/loveIs.js';
import { cryptocurrency } from '../contents/posts/cryptocurrency.js';
import { blog } from '../contents/posts/blog.js';

export const routeContents = {
  '/': {
    route: feed,
    title: 'Haneum Blog',
  },
  '/hi': {
    route: hi,
    title: 'Hi, Nice to meet you.',
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
  '/cryptocurrency': {
    route: cryptocurrency,
    title: 'Cryptocurrency.',
  },
  '/blog': {
    route: blog,
    title: 'About this blog.',
  },
};
