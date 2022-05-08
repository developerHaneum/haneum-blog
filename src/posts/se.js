import { postMaker } from '../components/postMaker.js';

export const se = () => {
  const render = () => {
    const contentMsg = `
      I finally bought the SE on March 19, 2021.
      I purchased a product with a pretty red color and purchased a generous 128GB memory.
      
      I bought it in advance and had to wait, but I bought it with my own money, so I'm really excited.
      I will take a lot of pictures and upload them.
    `;
    const contents = {
      title: 'SE, I finally bought it.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
