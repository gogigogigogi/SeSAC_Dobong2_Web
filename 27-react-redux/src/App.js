import { Box1 } from './components/Box';
import Bank from './components/Bank';

function App() {
  return (
    <>
      <h1>Redux 사용하기!</h1>
      {/* <Test /> */}
      <h2>여러개의 전역 state 사용하기</h2>
      <Box1 />
      <Bank />
    </>
  );
}

export default App;
