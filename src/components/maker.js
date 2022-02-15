import { header } from './header.js';
import { content } from './content.js';

export const maker = contentMsg => {
  return `
    ${header()}
    ${content(contentMsg)}

  `;
};
