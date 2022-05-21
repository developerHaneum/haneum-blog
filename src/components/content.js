import './content.css';
import { replaceContent } from './replaceContent.js';

export const content = contents => `
  <div class="container">
    <div class="container-content">
      <div class="container-wrapper">
        <div class="content-title" role="title">
          <a href="/">${contents.title}</a>
        </div>
      </div>
      <div class="container-wrapper" role="contents">
        <div class="content-main">
          ${replaceContent(contents.content)}</div>
        </div>
    </div>
  </div>
`;
