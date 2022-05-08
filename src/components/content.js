import './content.css';

export const content = contents => {
  const contentArr = contents.content.split('\n');
  contentArr.splice(0, 1);
  contentArr.splice(-1, 1);
  return `
  <div class="container">
    <div class="container-wrapper">
      <div class="container-content">
        <div class="content-title">
          <a href="/feed">${contents.title}</a>
        </div>
        <div class="content-main">${contentArr
          .join('\n')
          .split('\n\n')
          .map(
            a =>
              `${
                !(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1) ||
                !(
                  a.split('\n').filter(Boolean)[0].indexOf('<blockquote') === -1
                )
                  ? `${`${a
                      .split('\n')
                      .filter(Boolean)
                      .map(
                        b =>
                          `${
                            !(
                              a.split('\n').filter(Boolean)[
                                a.split('\n').filter(Boolean).length - 1
                              ] === b
                            )
                              ? `${b}<br/>`
                              : `${b}`
                          }`
                      )
                      .join('')}`}`
                  : `<p>${a
                      .split('\n')
                      .filter(Boolean)
                      .map(b =>
                        !(
                          a.split('\n').filter(Boolean)[
                            a.split('\n').filter(Boolean).length - 1
                          ] === b
                        )
                          ? `${b}<br/>`
                          : `${b}`
                      )
                      .join('')}</p>`
              }`
          )
          .join('')}</div>
      </div>
    </div>
  </div>
`;
};
