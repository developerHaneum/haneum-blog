import { postMaker } from '../components/postMaker';

export const motherfxxxer = () => {
  const render = () => {
    const contentMsg = `
      <p>You may not believe it, but I don't use profanity in public.<br/>
      But, I'll only do it once.</p>
      <p>Don't touch the most beautiful her in the world I love, you bastard.
      <br/>fxxxing.</p>
    `;
    const contents = {
      title: 'Motherfxxxer',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
