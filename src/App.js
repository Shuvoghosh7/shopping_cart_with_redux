import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import Products from './component/Products/Products';
import Cart from './component/Cart/Cart';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

      
      
      
    </div>
  );
}

export default App;
