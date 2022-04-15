import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { se } from '../posts/se.js';
import { whatShouldIDo } from '../posts/whatShouldIDo';
import { whatIsDeveloper } from '../posts/whatIsDeveloper.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';

export const routeContents = {
  '/': {
    route: home,
    title: 'Haneum Blog',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/503': {
    route: serviceUnavailable,
    title: '503 Service unavailable',
  },
  '/menu': {
    route: menu,
    title: 'Menu',
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
  '/what-should-i-do': {
    route: whatShouldIDo,
    title: 'What should I do.',
  },
  '/what-is-developer': {
    route: whatIsDeveloper,
    title: 'What is developer.',
  },
};
