import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Student from './pages/Student';
import './style/common.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/student/:name' element={<Student />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
