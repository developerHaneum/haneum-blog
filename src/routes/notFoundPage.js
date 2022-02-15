import { maker } from '../components/maker';

const contentMsg = `
    <h1>404 Not found page</h1>
    <p>죄송합니다. 위의 링크 텍스트를 클릭하거나 알고 있는 주소로 접근하세요.</p>
    <p>sorry. Please click the link text above or access it from an address you know.</p>
    <p>申し訳ありません。 上記のリンクテキストをクリックするか、既知のアドレスにアクセスしてください。</p>
    <p>Verzeihung. Bitte klicken Sie oben auf den Linktext oder greifen Sie von einer Ihnen bekannten Adresse darauf zu.</p>
`;
export const notFoundPage = () => maker(contentMsg);
