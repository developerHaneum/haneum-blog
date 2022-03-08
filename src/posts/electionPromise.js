import { postMaker } from '../components/postMaker';

const contentMsg = `
    <h1>Election promise.</h1>
    <ul>
        <li class="second-list">
            <p>슬로건</p>
            <ul>
                <li class="second-list">
                    <p>저, 차한음은 합니다. (기.호.1.번.차.한.음!)</p>
                </li>
            </ul>
            <br/>
            <p>공적(자리)의 욕 근절 실현</p>
            <ul>
                <li class="third-list">
                    <p><b>양심에 맞기도록</b></p>
                    <p>언행으로 인한 문제 야기시 즉각적으로 대응</p>
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
                    <p>2주 금요일마다 학급 모두의 공익을 생각하는 학생 한명을 반장과 부반장이 자체적으로 선발하여 상을 수여, 임기내에 학생은 6개월 동안 최대 2번까지 상을 수여받을 수 있음</p>
                    <p>만약 낙선되더라도 부반장이나 학생으로서 다른 후보들이 이 공약들의 절반 이상을 추진할 수 있도록 최선을 다할 것임</p>
                </li>
            </ul>
            <br/>
            <p>열정의 학급</p>
            <ul>
                <li class="third-list">
                    <p><b>학교 전체의 대한 불만과 문제를 논의해보는 시간을 반장과 부반장이 독자적으로 진행하여</p>
                    <p>학교 전체의 대한 문제를 해결하거나 해결 방안을 보다 신속하고 완실하게 제시</b></p>
                </li>
            </ul>
        </li>
    </ul>
`;
export const electionPromise = () => postMaker(contentMsg);
