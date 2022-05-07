import { postMaker } from '../components/postMaker.js';
import { renderHTML } from '../components/renderHTML.js';

export const aprilRetrospective = () => {
  const render = () => {
    const contentMsg = `
      <p>I did a lot of work in April. (A total of 208 commits were made in April)<br/>
      Implementing JavaScript components, midterm exams, first of all, I did a lot of work. (I can't remember everything, but I did a lot first.)</p>
      <p id="commits"><i></i></p>
      <p>Github tells you that I've done this kind of work and committed it.<br/>
      I will work hard again and spend the second week of May.</p>
    `;
    const contents = {
      title: 'April retrospective.',
      content: contentMsg,
    };
    postMaker(contents);
    const commitLogs = [
      'chebread/this-is-haneum 77 commits',
      'chebread/haneum-blog 73 commits',
      'chebread/chebread 26 commits',
      'chebread/sof-solutions 6 commits',
      'chebread/js-components 5 commits',
      'chebread/fp-basics 5 commits',
      'chebread/covstats 3 commits',
      'chebread/easy-paint 3 commits',
      'chebread/todo-list 3 commits',
      'chebread/infjs 2 commits',
      'chebread/crelement 2 commits',
      'chebread/colvier 1 commit',
      'chebread/md-typewriter 1 commit',
      'chebread/ft 1 commit',
    ];
    renderHTML(
      commitLogs.map(item => `${item}<br/>`).join(''),
      document.querySelector('#commits i')
    );
  };
  render();
};
