import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { serviceUnavailable } from '../routes/serviceUnavailable.js';
import { devilPutin } from '../posts/devilPutin.js';
import { loveIs } from '../posts/loveIs.js';
import { se } from '../posts/se.js';
import { feed } from '../routes/feed.js';
import { myPlaylist } from '../posts/myPlaylist.js';
import { childrensDay } from '../posts/childrensDay.js';
import { developersTheseDays } from '../posts/developersTheseDays.js';
import { jsConf } from '../posts/jsConf.js';
import { aboutCrelement } from '../posts/aboutCrelement.js';
import { spotify } from '../posts/spotify.js';

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
  '/my-playlist': {
    route: myPlaylist,
    title: 'My playlist.',
  },
  '/childrens-day': {
    route: childrensDay,
    title: "Children's Day.",
  },
  '/developers-these-days': {
    route: developersTheseDays,
    title: 'Developers these days.',
  },
  '/jsconf': {
    route: jsConf,
    title: 'JSConf.',
  },
  '/about-crelement': {
    route: aboutCrelement,
    title: 'About crelement.',
  },
  '/spotify': {
    route: spotify,
    title: 'What I feel while using Spotify.',
  },
};
