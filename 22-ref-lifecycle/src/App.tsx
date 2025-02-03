import Container from './components/practice/Container';
import FakePost from './components/practice/FakePost';
import { PostJson } from './components/practice/PostJson';
import { PostList } from './components/practice/PostList';
import RealPost from './components/practice/RealPost';

function App() {
  return (
    <div className='App'>
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 /> */}
      {/* <LifeCycleClass /> */}
      <PostList />
      {/* <PostJson /> */}
      {/* <Container>
        <FakePost />
        <RealPost />
      </Container> */}
    </div>
  );
}

export default App;
