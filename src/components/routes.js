import { home } from '../routes/home.js';
import { menu } from '../routes/menu.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { fpBasics } from '../posts/fpBasics.js';
import { gitCommitMsgRules } from '../posts/gitCommitMsgRules.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { plan } from '../posts/plan.js';
import { march } from '../posts/march.js';
import { se } from '../posts/se.js';

export const routes = {
  '/': home,
  '/menu': menu,
  '/404': notFoundPage,
  '/fp-basics': fpBasics,
  '/git-commit-msg-rules': gitCommitMsgRules,
  '/devil-putin': devilPutin,
  '/love-is': loveIs,
  '/plan': plan,
  '/march': march,
  '/se': se,
};
