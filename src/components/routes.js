import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { algorithmBasics } from '../posts/algorithmBasics.js';
import { fpBasics } from '../posts/fpBasics.js';
import { myPrinciple } from '../posts/myPrinciple.js';
import { jsPushState } from '../posts/jsPushState.js';
import { targets } from '../posts/targets.js';
import { favoriteMusic } from '../posts/favoriteMusic.js';
import { gitCommitMsgRule } from '../posts/gitCommitMsgRule';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/algorithm-basics': algorithmBasics,
  '/fp-basics': fpBasics,
  '/my-principle': myPrinciple,
  '/js-pushstate': jsPushState,
  '/targets': targets,
  '/favorite-music': favoriteMusic,
  '/git-commit-msg-rule': gitCommitMsgRule,
};
