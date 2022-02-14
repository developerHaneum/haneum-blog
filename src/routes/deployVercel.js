import { maker } from '../components/maker.js';

const contentMsg = `
    <h1>Deploy with Vercel.</h1>
    <p>※ 참고해주세요. 이 글은 Express.js와 Vanilla JS를 사용하여 Vercel에 배포를 할때를 설명하는 글입니다.</p>
    <br/>
    <p>server.js 와 webpack을 구성하였으면, vercel.json 이라는 Vercel의 404 처리를 위한 설정 파일을 작성해야 합니다.</p>
    <p>vercel.json 은 root directory 에 작성해야 하며, 이와 비슷하거나 같도록 작성해야 합니다.</p>
    <br/>
    <h2>vercel.json 작성방법.</h2>
    <p><a href="https://gist.github.com/developerHaneum/8281cd2a2c2a30f500b82796f97070cf">Gist reference vercel.json.</a></p>
    <p>이 코드를 참고하여 vercel.json을 작성했다면, 이제 Vercel에 배포를 하면됩니다.</p>
    <br/>
    <h2>Vercel 배포 방법</h2>
    <p>Build command는 e.g) npm run build 를 입력합니다</p>
    <p>Output directory는 webpack의 output인 e.g) dist를 입력하며, Install command는 e.g) npm install 를 입력합니다.</p>
`;
export const deployVercel = () => maker(contentMsg);
