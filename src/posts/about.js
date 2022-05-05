import { postMaker } from '../components/postMaker.js';

export const about = () => {
  const render = () => {
    const contentMsg = `
    <p>Haneum is a front-end developer.<br/>
    This means that you are a person who can make things uncomfortable in daily life and new ideas come true on the web.<br/>
    (However, if it is a large project, a back-end developer is required.)</p>
    <p>Haneum has won many projects and awards. (Ah I've only won award once.)<br/>
    Examples include colvier, crelement, and awards from 2021 open SW developer contests.</p>
    <p>Haneum's belief is to change the world for good. The world here means the web world.<br/>
    The metaverse is on the rise these days. If the metaverse is realized, this belief will be strengthened even more.</p>
    <p>When developing front-end, Haneum is always developed based on a simple UI, intuitive UI and UX, and a service that does not track users.<br/>
    If I need to monetize, I plan to keep the service on a subscription basis.<br/>
    We believe this will be feasible enough if we create services (with UI and UX) that will attract users.</p>
    <p>Thank you.</p>
    `;
    const contents = {
      title: 'About Haneum.',
      content: contentMsg,
    };
    postMaker(contents);
  };
  render();
};
