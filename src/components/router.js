export const router = (target, path, routes, routesTitle) => {
  if (path === window.location.pathname) {
    // 만약 같은 주소면 주소를 바꾸지 않는다
  } else {
    // 주소바꾸기
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routes[path]) {
    if (path === '/') {
    } else {
      document.title = routesTitle['/404'];
      target.innerHTML = routes['/404'];
    }
    return;
  }
  window.onpopstate = e => {
    // 뒤로가기, 앞으로 가기 사용 가능하게 제어
    document.title = routesTitle[window.location.pathname];
    target.innerHTML = routes[window.location.pathname];
  };
  document.title = routesTitle[path];
  target.innerHTML = routes[path];
};
