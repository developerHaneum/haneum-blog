import { postMaker } from '../components/postMaker.js';

export const devilPutin = () => {
  const render = () => {
    const contentMsg = `
      <p>I believed that there would be no more wars in the 21st century.<br/>
      Because war is so horrendous, terrifying, threatening and terrifying.</p>
      <p>However, on February 20, Russian forces invaded Ukraine.<br/>
      I didn't believe it at first. Because it was too unrealistic and believed that in the 21st century there would be no war.</p>
      <p>I don't think Putin is any different from Hitler. Innocent citizens of Ukraine even on the last day of February, now 28 February. Because children are being victimized. <br/>
      The citizens and children did nothing wrong. However, he was killed by Putin and suffered psychological damage.</p>
      <p>How is Putin different from Hitler? Hitler who sacrificed many civilians. Putin is currently sacrificing many citizens.<br/>
      I don't see any difference between the two.</p>
    `;
    const contents = {
      title: 'Devil Putin.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
