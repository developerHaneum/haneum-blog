import './content.css';

export const content = contents => `
  <div class="container">
    <div class="container-wrapper">
      <div class="container-content">
        <div class="content-title">
          <a href="/feed">${contents.title}</a>
        </div>
        <div class="content-main">
          ${contents.content}
        </div>
      </div>
    </div>
  </div>
`;
