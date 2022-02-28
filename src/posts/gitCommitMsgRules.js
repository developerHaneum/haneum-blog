import { postMaker } from '../components/postMaker.js';

const contentMsg = `
    <h1>Git commit message rules</h1>
    <p><a href="https://velog.io/@jiheon/Git-Commit-message-규칙">Reference</a></p>
`;
export const gitCommitMsgRules = () => postMaker(contentMsg);
