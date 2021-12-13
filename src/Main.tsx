import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/detail' element={<Detail />}></Route>
    </Routes>
  );
};

export default Main;
