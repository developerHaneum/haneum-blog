import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { se } from '../posts/se.js';
import { whatShouldIDo } from '../posts/whatShouldIDo';
import { whatIsDeveloper } from '../posts/whatIsDeveloper.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { whoIAM } from '../posts/whoIAm.js';
import { myAnalects } from '../posts/myAnalects';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/503': serviceUnavailable,
  '/devil-putin': devilPutin,
  '/love-is': loveIs,
  '/se': se,
  '/what-should-i-do': whatShouldIDo,
  '/what-is-developer': whatIsDeveloper,
  '/who-i-am': whoIAM,
  '/analects': myAnalects,
};

export const routeTitles = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/404': '404 Not found page',
  '/503': '503 Service unavailable',
  '/devil-putin': 'Devil Putin.',
  '/love-is': 'Love is.',
  '/se': 'SE, I finally bought it.',
  '/what-is-developer': 'What is developer?',
  '/who-i-am': 'Who I am?',
  '/analects': 'My analects',
};
