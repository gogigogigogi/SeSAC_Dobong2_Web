import Container from '../components/lecture/Container';
import EventObject from '../components/lecture/EventObject';
import {
  PropsTypes1,
  PropsTypes2,
  PropsTypes3,
} from '../components/lecture/PropsTypes';
import SetText from '../components/lecture/SetText';
import TodoList from '../components/lecture/TodoList';

export default function Lecture() {
  return (
    <main>
      <PropsTypes1 name={'hello'} />
      <PropsTypes2 width='100px' color='red' height='100px' />
      <PropsTypes3 width='100px' height='50px' text='hi' />
      <PropsTypes3 width='100px' height='50px' text='hi' color='red' />
      <Container>
        <SetText />
        <EventObject />
        <TodoList />
      </Container>
    </main>
  );
}
