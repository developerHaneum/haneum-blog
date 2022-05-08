import { postMaker } from '../components/postMaker.js';

export const devilPutin = () => {
  const render = () => {
    const contentMsg = `
      I believed that there would be no more wars in the 21st century.
      Because war is so horrendous, terrifying, threatening and terrifying.
      
      However, on February 20, Russian forces invaded Ukraine.
      I didn't believe it at first. Because it was too unrealistic and believed that in the 21st century there would be no war.

      I don't think Putin is any different from Hitler. Innocent citizens of Ukraine even on the last day of February, now 28 February. Because children are being victimized.
      The citizens and children did nothing wrong. However, he was killed by Putin and suffered psychological damage.

      How is Putin different from Hitler? Hitler who sacrificed many civilians. Putin is currently sacrificing many citizens.
      I don't see any difference between the two.
    `;
    const contents = {
      title: 'Devil Putin.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
