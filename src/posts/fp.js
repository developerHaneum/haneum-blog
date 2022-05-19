import { postMaker } from '../components/postMaker';

export const fp = () => {
  const contentMsg = `
    This is awesome. First of all, the paradigm of functional programming is smooth because the functions are awesome.
    
    Because I believe in Hamslam.
  `;
  postMaker({
    title: 'Functional programming.',
    content: contentMsg,
  });
};
