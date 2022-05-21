import './reset.css';
import './app.css';
import './routes/notFoundPage.css';
import { router } from './components/router.js';
import { routeContents } from './components/routeContents.js';
const nodeEnv = process.env.NODE_ENV || 'development';
const app = () => {
  const render = () => {
    router(window.location.pathname);
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', e => {
        if (
          e.target.tagName === 'A' &&
          ((routeContents[
            e.target.href.substring(
              e.target.href.indexOf('/', 8),
              e.target.href.length
            )
          ] ===
            undefined) ===
            false) ===
            true
        ) {
          e.preventDefault();
          router(
            e.target.href.substring(
              e.target.href.indexOf('/', 8),
              e.target.href.length
            )
          );
        }
        return;
      });
    });
  };
  render();
};
app();
