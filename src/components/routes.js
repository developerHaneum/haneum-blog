import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { fpBasics } from '../posts/fpBasics.js';
import { gitCommitMsgRules } from '../posts/gitCommitMsgRules.js';
import { devilPutin } from '../posts/devilPutin.js';
import { startingSchool } from '../posts/startingSchool.js';
import { cafe } from '../posts/cafe.js';
import { electionPromise } from '../posts/electionPromise.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/fp-basics': fpBasics,
  '/git-commit-msg-rules': gitCommitMsgRules,
  '/devil-putin': devilPutin,
  '/starting-school': startingSchool,
  '/cafe': cafe,
  '/election-promise': electionPromise,
};

export const routeTitles = {
  '/': 'Haneum Blog',
  '/menu': 'Menu',
  '/fp-basics': 'JavaScript functional programming basic',
  '/404': '404 Not found page',
  '/git-commit-msg-rules': 'Git commit message rule',
  '/devil-putin': 'Devil Putin.',
  '/starting-school': 'Starting school.',
  '/cafe': 'Cafe.',
  '/election-promise': 'Election promise.',
};
