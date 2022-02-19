import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { algorithmBasics } from '../posts/algorithmBasics.js';
import { fpBasics } from '../posts/fpBasics.js';
import { myPrinciple } from '../posts/myPrinciple.js';
import { jsPushState } from '../posts/jsPushState.js';
import { oneTargets } from '../posts/oneTargets.js';
import { favoriteMusic } from '../posts/favoriteMusic.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/algorithm-basics': algorithmBasics,
  '/fp-basics': fpBasics,
  '/my-principle': myPrinciple,
  '/js-pushstate': jsPushState,
  '/2021-targets': oneTargets,
  '/favorite-music': favoriteMusic,
  '/404': notFoundPage,
};
