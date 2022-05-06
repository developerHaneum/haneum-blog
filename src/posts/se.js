import { postMaker } from '../components/postMaker.js';

export const se = () => {
  const render = () => {
    const contentMsg = `
    <p>I finally bought the SE on March 19, 2021.</br>
    I purchased a product with a pretty red color and purchased a generous 128GB memory.</p>
    <p>I bought it in advance and had to wait, but I bought it with my own money, so I'm really excited.<br/>
    I will take a lot of pictures and upload them.</p>
    `;
    const contents = {
      title: 'SE, I finally bought it.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
