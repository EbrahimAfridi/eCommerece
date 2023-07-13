// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/navbar";
// import Shop from './Pages/Shop/Shop'
// import './App.css';
// import {ProductPage} from "./Pages/ProductPage/ProductPage.jsx";
// import {ShopContextProvider} from "./Context/shop-context.jsx";
// import {Wishlist} from "./Pages/Wishlist/Wishlist.jsx";
// import NewCart from "./NEW_CART/NewCart.jsx";
// function App() {
//     return (
//       <div className='App'>
//           <ShopContextProvider>
//           <BrowserRouter>
//               <Navbar/>
//               <Routes>
//                   <Route path='/' element={<Shop/>}/>
//                   <Route path='/wishlist' element={<Wishlist/>}/>
//                   <Route path='/cart' element={<NewCart/>}/>
//                   <Route path='/productPage/:id' element={<ProductPage />} />
//               </Routes>
//           </BrowserRouter>
//           </ShopContextProvider>
//       </div>
//     );
//
// }
// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar";
// import Shop from './Pages/Shop/Shop.jsx';
import Shop from "./pages/Shop/Shop.jsx";
import './App.css';
import { ProductPage } from "./Pages/ProductPage/ProductPage.jsx";
import { ShopContextProvider } from "./Context/shop-context.jsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.jsx";
import NewCart from "./NEW_CART/NewCart.jsx";
// import NewFooter from './components/newFooter';

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<NewCart />} />
                        <Route path="/productPage/:id" element={<ProductPage />} />
                    </Routes>
                </BrowserRouter>
            </ShopContextProvider>
        </div>
    );
}

export default App;
