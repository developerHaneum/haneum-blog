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
    if (!routes[window.location.pathname]) {
      // e.preventDefault a tag로 이동시 다시 404 페이지로 접근시 현재 접근하는 URL이 존재하지 않으면 404 페이지를 로드한다.
      // (단, 예전과 같이 존재하지 않는 URL을 /404로 변경하지는 않는다. 그저 /404 URL은 target.innerHTML을 위한 것이다.)
      console.log(window.location.pathname);
      document.title = routesTitle['/404'];
      target.innerHTML = routes['/404'];
      return;
    }
    document.title = routesTitle[window.location.pathname];
    target.innerHTML = routes[window.location.pathname];
  };
  document.title = routesTitle[path];
  target.innerHTML = routes[path];
};
