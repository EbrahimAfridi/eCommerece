import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
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