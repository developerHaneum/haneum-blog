import { routeContents } from './routeContents';

export const render = (target, path) => {
  target.innerHTML = ``;
  target.insertAdjacentHTML('afterbegin', routeContents[path].route());
};
