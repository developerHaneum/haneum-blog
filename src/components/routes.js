import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { fpBasics } from '../posts/fpBasics.js';
import { gitCommitMsgRules } from '../posts/gitCommitMsgRules.js';
import { devilPutin } from '../posts/devilPutin.js';
import { startingSchool } from '../posts/startingSchool.js';
import { cafe } from '../posts/cafe.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/fp-basics': fpBasics,
  '/git-commit-msg-rules': gitCommitMsgRules,
  '/devil-putin': devilPutin,
  '/starting-school': startingSchool,
  '/cafe': cafe,
};
