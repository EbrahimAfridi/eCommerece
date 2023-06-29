import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Cart from './Pages/Cart/Cart'
import Shop from './Pages/Shop/Shop'
import './App.css';
import {ProductPage} from "./Pages/ProductPage/ProductPage.jsx";
import {ShopContextProvider} from "./Context/shop-context.jsx";
import {Wishlist} from "./Pages/Wishlist/Wishlist.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
      <div className='App'>
          <ShopContextProvider>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Shop/>}/>
                  <Route path='/wishlist' element={<Wishlist/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/productPage/:id' element={<ProductPage />} />
              </Routes>
          </BrowserRouter>
          </ShopContextProvider>
      </div>
    );
}
export default App;