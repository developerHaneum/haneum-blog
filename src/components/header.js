import './header.css';

export const header = () => `
  <header class="header">
    <div class="header-wrapper">
      <nav class="header-navigator">
        <a href="/">/</a> ${window.location.pathname}
      </nav>
    </div>
  </header>
`;
