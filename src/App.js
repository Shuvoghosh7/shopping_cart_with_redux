import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products/Products';
import Cart from './component/Cart/Cart';
import { Provider } from "react-redux";
import store from './redux/productCart/store';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>

    </Provider>

  );
}

export default App;
