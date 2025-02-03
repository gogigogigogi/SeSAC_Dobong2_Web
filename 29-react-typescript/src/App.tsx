// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lecture from './pages/Lecture';
import Practice from './pages/Practice';
import Matzip from './pages/Matzip';
import PostList from './pages/PostList';
import Practice1 from './pages/Practice1';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lecture' element={<Lecture />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='practice1' element={<Practice1 />} />
        <Route path='/practice1/codingon' element={<PostList />} />
        <Route path='/practice/matzip' element={<Matzip />} />
      </Routes>
    </div>
  );
}

export default App;
