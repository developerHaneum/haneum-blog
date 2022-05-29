import feed from '../routes/feed.js';
import notFoundPage from '../routes/notFoundPage.js';
import hi from '../posts/hi.js';
import loveIs from '../posts/loveIs.js';
import cryptocurrency from '../posts/cryptocurrency.js';

const routes = {
  '/': {
    route: feed,
    title: 'Haneum Blog',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/1': {
    route: hi,
    title: 'Hi, Nice to meet you.',
  },
  '/2': {
    route: loveIs,
    title: 'Love is.',
  },
  '/3': {
    route: cryptocurrency,
    title: 'Cryptocurrency.',
  },
};

export default routes;
