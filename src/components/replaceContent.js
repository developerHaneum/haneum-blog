export const replaceContent = content => {
  const arrContent = content.split('\n');
  if (arrContent[arrContent.length - 1].replace(/\s/g, '').length === 0) {
    // 끝에 문자열이 띄어쓰기라면 그것을 없에준다.
    arrContent.splice(-1, 1);
  }
  return `${arrContent
    .join('\n')
    .split('\n\n')
    .map(a =>
      a === ''
        ? ''
        : `${
            !(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1) ||
            !(a.split('\n').filter(Boolean)[0].indexOf('<blockquote') === -1)
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
    .join('')}`;
};
