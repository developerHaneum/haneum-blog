import { postMaker } from '../components/postMaker';

const contentMsg = `
    <h1>Election promise.</h1>
    <ul>
        <li class="second-list">
            <p>공적(자리)의 욕 근절 실현</p>
            <ul>
                <li class="third-list">
                    <p><b>양심에 맞기도록</b></p>
                </li>
            </ul>
            <br/>
            <p>도덕적인 학급</p>
            <ul>
                <li class="third-list">
                    <p><b>도덕성이 우선시되는 규범적 학급 실현</b></p>
                </li>
            </ul>
            <br/>
            <p>행복한 학급</p>
            <ul>
                <li class="third-list">
                    <p><b>폭력과 암묵적인 따돌림 근절 실현</b></p>
                    <p>폭력 및 따돌림 발생을 예지하여 주체적으로 대응</p>
                    <p>폭력 및 따돌림으로 인해 피해 야기시 이를 즉각적으로 대응</p>
                </li>
            </ul>
            <br/>
            <p>통합의 학급</p>
            <ul>
                <li class="third-list">
                    <p><b>편가르기 근절 실현 및 평등주의 학급 실현</b></p>
                    <p>학생들 각각의 학급 문제 해결을 신속하고 중립적이게 실현</p>
                    <p>학급의 공익을 중시하는 학생 한명을 두 주 금요일마다 반장과 부반장이 자체적으로 선발하여 상을 수여</p>
                    <p>만약 낙선 되더라도 부반장이나 학생으로서 다른 후보들에게 공약의 절반 이상을 추진하도록 최선을 다할 것임</p>
                </li>
            </ul>
            <br/>
            <p>열정의 학급</p>
            <ul>
                <li class="third-list">
                    <p><b>학급과 학교 전체의 대한 불만과 문제를 논의 해보는 시간을 반장과 부반장이 독자적으로 주체하여</p>
                    <p>학교 전체의 대한 문제의 대한 해결 방안을 보다 신속하고 완실하게 제시하거나 해결</b></p>
                </li>
            </ul>
        </li>
    </ul>
`;
export const electionPromise = () => postMaker(contentMsg);
