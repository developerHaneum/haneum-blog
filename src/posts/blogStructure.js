import { maker } from '../components/maker.js';

const contentMsg = `
    <h1>How is this blog structured?</h1>
    <h2>Stacks</h2>
    <ul>
        <li class="second-list"><p>HTML5</p></li>
        <li class="second-list"><p>CSS3</p></li>
        <li class="second-list"><p>JavaScript (ES6+ grammar)</p></li>
        <li class="second-list"><p>Express.js</p></li>
        <li class="second-list"><p>Webpack</p></li>
        <li class="second-list"><p>Babel</p></li>
    </ul>
    <br/>
    <h2>Rendering (SPA)</h2>
    <ul>
        <li class="second-list"><p>app.js: Application의 모든 정보를 담고 있음</p></li>
        <li class="second-list"><p>router.js: Application의 Routing의 모든 과정을 함수로 담고 있음</p></li>
        <li class="second-list"><p>routes.js: Routing에 필요한 경로와 Routing pages를 객체로 담고 있음</p></li>
        <li class="second-list"><p>routesTitle.js: Routing을 한 후, title을 변경할 경로와 title name을 객체로 담고 있음</p></li>
    </ul>
    <br/>
    <h2>State management</h2>
    <ul>
        <li class="second-list"><p>&lt;posts-name&gt;.js: HTML과 Style과 JS를 로드한 뒤 로직을 실행하는 window.onload 함수를 사용하여 각 라우트 페이지당 상태 관리를 하고 있음.</p></li>
    </ul>
`;
export const blogStructure = () => maker(contentMsg);
