import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Shop from "./Pages/Shop/Shop.jsx";
import './App.css';
import { ProductPage } from "./Pages/ProductPage/ProductPage.jsx";
import { ShopContextProvider } from "./Context/shop-context.jsx";
import { Wishlist } from "./Pages/Wishlist/Wishlist.jsx";
import NewCart from "./NEW_CART/NewCart.jsx";
import {FirebaseContextProvider} from "./auth/FirebaseContext.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import NewLogin from "./Pages/LogIn/NewLogin.jsx";
import Account from "./Pages/Account/Account.jsx";


function App() {

    return (
      <div className="App">
        <FirebaseContextProvider>
          <ShopContextProvider>
            {/*<Navbar/>*/}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<NewLogin />} />
                <Route path="/account" element={<Account />} />
                <Route
                  path="/shop"
                  element={<ProtectedRoute><Shop /></ProtectedRoute>}
                />
                <Route
                  path="/wishlist"
                  element={<ProtectedRoute> <Wishlist /> </ProtectedRoute>}
                />
                <Route
                  path="/cart"
                  element={<ProtectedRoute><NewCart /></ProtectedRoute>}
                />
                <Route
                  path="/productPage/:id"
                  element={<ProtectedRoute><ProductPage /></ProtectedRoute>}
                />
                </Routes>
            </BrowserRouter>
          </ShopContextProvider>
        </FirebaseContextProvider>
      </div>
    );
}

export default App;

  {/*// return (*/}
  {/*//       <div className="App">*/}
  {/*//         <FirebaseContextProvider>*/}
  {/*//           <ShopContextProvider>*/}
  {/*//             <BrowserRouter>*/}
  {/*//               <Navbar />*/}
  {/*//               <Routes>*/}
  {/*//                 <Route path='/' element={<SignUp/>}/>*/}
  {/*//                 <Route path='/signin' element={<SignIn/>}/>*/}
  {/*//                   /!*<ProtectedRoute>*!/*/}
  {/*//                 <ProtectedRoute path="/shop" element={<Shop />} />*/}
  {/*//                 <ProtectedRoute path="/wishlist" element={<Wishlist />} />*/}
  {/*//                 <ProtectedRoute path="/cart" element={<NewCart />} />*/}
  {/*//                 <ProtectedRoute path="/productPage/:id" element={<ProductPage />} />*/}
  {/*//                   /!*</ProtectedRoute>*!/*/}
  {/*//               </Routes>*/}
  {/*//             </BrowserRouter>*/}
  {/*//           </ShopContextProvider>*/}
  {/*//         </FirebaseContextProvider>*/}

          {/*<ShopContextProvider>*/}
          {/*    <Navbar />*/}
          {/*      <BrowserRouter>*/}
          {/*        <Routes>*/}
          {/*              <Route path="/" element={<Shop />} />*/}
          {/*              <Route path="/wishlist" element={<Wishlist />} />*/}
          {/*              <Route path="/cart" element={<NewCart />} />*/}
          {/*              <Route path="/productPage/:id" element={<ProductPage />} />*/}
          {/*          </Routes>*/}
          {/*      </BrowserRouter>*/}
          {/*  </ShopContextProvider>*/}

