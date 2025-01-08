import { ClassProps, ClassProps2 } from './components/ClassProps';
import ClassState from './components/ClassState';
import Counter from './components/Counter';
import HandlerEx from './components/ex/HandlerEx';
import { HandlerEx2 } from './components/ex/HandlerEx2';
import { HandlerEx3 } from './components/ex/HandlerEx3';
import { HandlerEx4 } from './components/ex/HandlerEx4';
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from './components/FunctionProps';
import FunctionState from './components/FunctionState';
import PracticeClass from './components/practice/PracticeClass';
import PracticeFunction from './components/practice/PracticeFunction';
import SyntheticEvent from './components/SyntheticEvent';
import { PororoObj } from './components/ex/HandlerEx5';
import { HandlerEx6 } from './components/ex/HandlerEx6';

function App() {
  return (
    <div>
      <h2>props 사용</h2>
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name='루피' color='pink' nickname='공주' />
      <ClassProps2 name='루피' color='pink' nickname='공주' />
      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name='사과' number={5} krPrice={10000} />
      <FunctionProps2 name='사과' number={5} krPrice={10000} />
      <FunctionProps3 name='샤인머스켓' number={1} krPrice={15000} />
      <FunctionProps4 name='딸기' number={1} krPrice={20000}>
        <span style={{ color: 'red' }}>children 요소 입니다</span>
      </FunctionProps4> */}
      {/* <h2>state</h2>
      <ClassState />
      <FunctionState /> */}
      {/* <PracticeClass />
      <PracticeFunction />
      <SyntheticEvent />
      <Counter /> */}
      <HandlerEx />
      <HandlerEx2 />
      <HandlerEx3 />
      <HandlerEx4 />
      <PororoObj />
      <HandlerEx6 />
    </div>
  );
}

export default App;