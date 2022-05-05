import { postMaker } from '../components/postMaker';
import { renderHTML } from '../components/renderHTML';

export const myPlaylist = () => {
  const render = () => {
    const contentMsg = `
      <p></p>
    `;
    const contents = {
      title: 'My playlist',
      content: contentMsg,
    };
    postMaker(contents);
    const songContents = {
      colde: {
        Dream: 'https://open.spotify.com/track/5fAmvVpvp7iL0QkL1kuw6S',
        'Control me': 'https://open.spotify.com/track/5fAmvVpvp7iL0QkL1kuw6S',
        'Your Dog Loves You':
          'https://open.spotify.com/track/2XdyebP7KxClMOse2C5iyA?si=c80fa499e2d14875',
      },
      'Zion.T': {
        'My Luv':
          'https://open.spotify.com/track/7nyHCuvAMkQKcUOFSg8qSJ?si=6ae6806f23454ecb',
      },
      'DPR LIVE': {
        'Right Here Right Now':
          'https://open.spotify.com/track/47UUNYT0lsDnX9EYHIBf3L?si=4b226c0649f14649',
      },
      'easy life': {
        'peaunt butter':
          'https://open.spotify.com/track/4K9Jh6jnw0P4FZUwrG6Keb?si=1c334f5d122a4486',
      },
    };
    renderHTML(
      Object.keys(songContents)
        .map(outKey =>
          Object.keys(songContents[outKey])
            .map(inKey => {
              return `<a href="${songContents[outKey][inKey]}">${inKey} - ${outKey}</a><br/>`;
            })
            .join('')
        )
        .join(''),
      document.querySelector('.content-main p')
    );
  };
  render();
};
