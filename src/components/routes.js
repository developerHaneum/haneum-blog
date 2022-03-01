import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { fpBasics } from '../posts/fpBasics.js';
import { gitCommitMsgRules } from '../posts/gitCommitMsgRules.js';
import { devilPutin } from '../posts/devilPutin.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/fp-basics': fpBasics,
  '/git-commit-msg-rules': gitCommitMsgRules,
  '/devil-putin': devilPutin,
};
