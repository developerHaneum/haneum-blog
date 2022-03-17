import { postMaker } from '../components/postMaker.js';

const contentMsg = `
  <h1>Blogging rules.</h1>
  <h2>기본적인 작성법</h2>
  <ul>
    <li class="second-list">
      <p>웹 브라우저 상단의 제목과 포스트의 제목은 항상 영어를 사용한다.</p>
      <p>개인적인 포스트일 경우 마침표를 찍는다.</p>
      <p>리스트 형태의 포스트는 <code>second-list</code> 와 <code>thrid-list</code> 를 사용한다.</p>
      <p>먼저 한국어로 포스트를 작성하되, 최대한 빨리 영어로 고칠 수 있도록 한다.</p>
      <p>지속적으로 포스트가 업데이트될 경우, 상단에 <i>※ This post will be continuously updated.</i> 구문을 추가한다.</p>
      <p>포스트 내에서 현재 날짜를 상단에 기입하지 않아도 된다.</p>
      <p>포스트는 직관적으로 간단명료하게 작성한다.</p>
      <p>소제목으로 핵심을 표현할때는 소제목 뒤에 <code>second-list</code> 태그로 소제목에 포함되는 글임을 명시하여 표현해준다.</p>
      <p>블로그의 Style의 수치는 규칙적으로 정하도록 한다. (예: 1.375px)</p>
      <p>블로그의 기능을 추가할때는 접근성과 디자인을 생각하여 추가하도록 한다.</p>
    </li>
  </ul>
  <br/>
  <h2>글 작성법</h2>
  <ul>
    <li class="second-list">
       <p>강조하고 싶은 문자는 <code>b</code> 태그로 표현한다.</p>
       <p>인라인 코드는 <code>code</code> 태그로 <code>p</code> 태그로 표현한다.</p>
       <p>소제목이 필요한 경우 <code>h2</code> 태그로 표현한다.</p>
       <p>문장이 길어질 경우, 비슷한 문장끼리 <code>br</code> 태그를 사용하여 2문단으로 분리한다.</p>
       <p>Image는 포스트 내에서 사용하지 않으며, 꼭 필요한 경우 링크로 접근할 수록 있도록 한다.</p>
       <p>특정 구문을 쓴다고 명시할때는 <code>i</code> 태그로 표현해준다.</p>
       <p>문장을 쓸때는 항상 <code>p</code> 태그를 사용하여 표현한다.</p>
       <p>링크는 <code>a</code> 태그의 <code>href</code> 속성으로 표현해주며, 링크의 이름은 간단명료하게 표현해준다.</p>
       <p>라이센스를 명시해줄때는 <code>(라이센스 이름) &amp;copy; (년도) (이름)</code> 으로 명시해준다.</p>
       <p>에시를 표현할때는 인라인의 형태인 <code>(예: ...)</code> 로 표현한다.</p>
    </li>
  </ul>
`;
export const bloggingRules = () => postMaker(contentMsg);
