import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { se } from '../posts/se.js';
import { feed } from '../routes/feed.js';
import { motherfxxxer } from '../posts/motherfxxxer.js';
import { myPlaylist } from '../posts/myPlaylist.js';
import { childrensDay } from '../posts/childrensDay.js';
import { whatIsWrong } from '../posts/whatIsWrong.js';
import { aprilRetrospective } from '../posts/aprilRetrospective.js';
import { developersTheseDays } from '../posts/developersTheseDays.js';
import { shxx } from '../posts/shxx.js';

export const routeContents = {
  '/': {
    route: home,
    title: 'Haneum Blog',
  },
  '/feed': {
    route: feed,
    title: 'Feed',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page',
  },
  '/503': {
    route: serviceUnavailable,
    title: '503 Service unavailable',
  },
  '/love-is': {
    route: loveIs,
    title: 'Love is.',
  },
  '/devil-putin': {
    route: devilPutin,
    title: 'Devil putin.',
  },
  '/se': {
    route: se,
    title: 'SE, I finally bought it.',
  },
  '/motherfxxxer': {
    route: motherfxxxer,
    title: 'Motherfxxxer.',
  },
  '/my-playlist': {
    route: myPlaylist,
    title: 'My playlist.',
  },
  '/childrens-day': {
    route: childrensDay,
    title: "Children's Day.",
  },
  '/what-is-wrong': {
    route: whatIsWrong,
    title: "What's wrong with me?",
  },
  '/april-retrospective': {
    route: aprilRetrospective,
    title: 'April retrospective.',
  },
  '/developers-these-days': {
    route: developersTheseDays,
    title: 'Developers these days.',
  },
  '/shit': {
    route: shxx,
    title: 'Shxx.',
  },
};
