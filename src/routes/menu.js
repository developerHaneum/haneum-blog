import { maker } from '../components/maker.js';

const contentMsg = `
    <ul>
        <li class="first-list"><h1>Blog posts</h1></li>
        <ul>
            <li class="second-list"><h2>Personal posts</h2></li>
            <ul>
                <li class="third-list"><p><a class="inlink" href="/">Hi, it's nice to meet you.</a></p></li>
            </ul>
        </ul>
        <br/>
        <ul>
            <li class="second-list"><h2>Vercel related posts</h2></li>
            <ul>
                <li class="third-list"><a class="inlink" href="/deploy-vercel">Deploy with Vercel</a></li>
            </ul>
        <ul>
        <br/>
        <ul>
            <li class="second-list"><h2>Node.js related posts</h2></li>
            <ul>
                <li class="third-list"><a class="inlink" href="/nodejs-basic">Node.js basic</a></li>
            </ul>
        <ul>
    </ul>
`; // html content
export const menu = () => maker(contentMsg);
