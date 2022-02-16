import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { algorithmBasics } from '../posts/algorithmBasics.js';
import { algorithmStack } from '../posts/algorithmStack.js';
import { fpBasics } from '../posts/fpBasics.js';
import { fpFirstLevelFunction } from '../posts/fpFirstLevelFunction.js';
import { myPrinciple } from '../posts/myPrinciple.js';
import { jsPushState } from '../posts/jsPushState.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/algorithm-basics': algorithmBasics,
  '/algorithm-stack': algorithmStack,
  '/fp-basics': fpBasics,
  '/fp-first-level-function': fpFirstLevelFunction,
  '/my-principle': myPrinciple,
  '/js-pushstate': jsPushState,
  '/404': notFoundPage,
};
