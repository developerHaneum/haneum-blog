import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { algorithmBasics } from '../posts/algorithmBasics.js';
import { algorithmStack } from '../posts/algorithmStack.js';
import { fpBasics } from '../posts/fpBasics.js';
import { myPrinciple } from '../posts/myPrinciple.js';
import { jsPushState } from '../posts/jsPushState.js';
import { blogStructure } from '../posts/blogStructure.js';
import { oneTargets } from '../posts/oneTargets.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/algorithm-basics': algorithmBasics,
  '/algorithm-stack': algorithmStack,
  '/fp-basics': fpBasics,
  '/my-principle': myPrinciple,
  '/js-pushstate': jsPushState,
  '/blog-structure': blogStructure,
  '/2021-targets': oneTargets,
  '/404': notFoundPage,
};
