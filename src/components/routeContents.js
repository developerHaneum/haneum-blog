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

export const routeContents = {
  '/': [home, 'Haneum Blog'],
  '/menu': [menu, 'Menu'],
  '/404': [notFoundPage, '404 Not found page'],
  '/503': [serviceUnavailable, '503 Service unavailable'],
  '/devil-putin': [devilPutin, 'Devil Putin.'],
  '/love-is': [loveIs, 'Love is.'],
  '/se': [se, 'SE, I finally bought it.'],
  '/what-should-i-do': [whatShouldIDo, 'What should I do?'],
  '/what-is-developer': [whatIsDeveloper, 'What is developer?'],
  '/who-i-am': [whoIAM, 'Who I am?'],
  '/analects': [myAnalects, 'My analects.'],
};
