import { postMaker } from '../components/postMaker.js';

export const childrensDay = () => {
  const render = () => {
    const contentMsg = `
      <p>I went to an amusement park alone on Children's Day in 2022.<br/>
       I only saw animals, but it was very fun.</p>
       <p>Because of the 100th anniversary of Children's Day / 20th anniversary of O-World, held around 1pm.</p>
       <p>The event had a family play. (It was really fun to see a father who was good at dancing.)<br/>
       Also, there was a dance performance, and the dancers danced very well. Those memories still remain strong.</p>
    `;
    const contents = {
      title: "Children's Day",
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
