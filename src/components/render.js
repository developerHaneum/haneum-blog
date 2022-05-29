import routes from './routes.js';

const render = path => {
  if (!routes[path].title) {
    document.title = 'This is Haneum';
  } else {
    document.title = routes[path].title;
  }
  routes[path].route();
};

export default render;
