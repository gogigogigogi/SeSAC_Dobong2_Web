import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Student from './pages/Student';
// import './style/common.scss';
import './style/common.css';
import Index from './pages/Index';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/student/:name' element={<Student />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
