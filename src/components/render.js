import { routeContents } from './routeContents';

export const render = (target, path) => {
  if (!routeContents[path].title) {
    document.title = 'Haneum Blog';
  } else {
    document.title = routeContents[path].title;
  }
  target.innerHTML = ``;
  target.insertAdjacentHTML('afterbegin', routeContents[path].route());
};
