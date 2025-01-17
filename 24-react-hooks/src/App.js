import UseMemo1 from './components/UseMemo1';
import UseMemoObj from './components/UseMemoObj';
import UseCallbackEx1 from './components/UseCallbackEx1';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';
import CustomHook from './components/CustomHook';
import Form from './components/Form';
import Practice1 from './components/practice/Practice1';

function App() {
  useTitle('hook 배워보기');
  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> */}
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      <Practice1 />
    </>
  );
}

export default App;
