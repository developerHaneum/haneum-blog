import { maker } from '../components/maker.js';

const contentMsg = `
    <h1>Deploy with Vercel.</h1>
    <p>vercel.json 작성방법.</p>
    <p><a href="https://gist.github.com/developerHaneum/8281cd2a2c2a30f500b82796f97070cf">Gist reference vercel.json.</a></p>
`;
export const deployVercel = () => maker(contentMsg);
