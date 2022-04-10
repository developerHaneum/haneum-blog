import { header } from './header.js';
import { content } from './content.js';

export const postMaker = contentMsg => {
  return `
    ${header()}
    ${content(contentMsg)}
  `;
};

// <div class="wrapper">
//   <aside class="aside"></aside>
// </div>;
