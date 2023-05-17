import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Second from './components/Second';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Details'  element={<Second/>} />
    </Routes>
);
}
export default Main;