import { postMaker } from '../components/postMaker';

const contentMsg = `
    <h1>404 '${window.location.pathname}' Not found page</h1>
    <p>Sorry. Please click the link text above or access it from an address you know.</p>
    <p>죄송합니다. 위의 링크 텍스트를 클릭하거나 알고 있는 주소로 접근하세요.</p>
    <p>申し訳ありません。 上記のリンクテキストをクリックするか、既知のアドレスにアクセスしてください。</p>
    <p>Verzeihung. Bitte klicken Sie oben auf den Linktext oder greifen Sie von einer Ihnen bekannten Adresse darauf zu.</p>
    <p>Pardon. Cliquez sur le texte du lien ci-dessus ou accédez à une adresse connue.</p>
    <br/>
    <p>MIT License &copy; ${new Date().getFullYear()} Cha Haneum</p>
`;
export const notFoundPage = () => postMaker(contentMsg);
