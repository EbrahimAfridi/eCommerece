import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Cart from "./pages/Cart/Cart.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import './App.css';
import {ShopContextProvider} from "./Context/shop-context.jsx";

function App() {
    return (
      <div className='App'>
          <ShopContextProvider>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      <Route path='/' element={<Shop/>}/>
                      <Route path='/cart' element={<Cart/>}/>
                  </Routes>
              </BrowserRouter>
          </ShopContextProvider>
      </div>
    );
}
export default App;