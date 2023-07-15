// import { useContext } from "react";
// import { ShopContext } from "../../Context/shop-context.jsx";

// export const Product = (props) => {
//   const { id, productName, price, productImage } = props.data;
//   const { addToCart, cartItems } = useContext(ShopContext);
//   const cartItemAmount = cartItems[id];
//
//   const handleAddToCart = (e) => {
//     e.preventDefault(); // Prevent the default behavior of the button
//     addToCart(id);
//   };
//
//   return (
//       <div className="bg-white product">
//           <div className="p-4 mb-10 image-div bg-slate-100">
//               <div className="image-container">
//                   <img src={productImage} alt={productName} className="bg-transparent blend-mode" />
//               </div>
//           </div>
//           <div className="flex justify-between gap-5 bg-white description selection:bg-black selection:text-white">
//               <p>
//                   <b>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</b>
//               </p>
//               <p>${price}</p>
//           </div>
//           <div className="flex items-center justify-end py-1 mt-2 mb-4 bg-white cart-div selection:bg-white selection:text-black">
//               <button className="p-1 text-white bg-black addToCartBttn" onClick={handleAddToCart}>
//                   Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
//               </button>
//           </div>
//       </div>
//   );
// };


// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/shop-context.jsx';
//
// export const Product = (props) => {
//     const { id, title, price, image } = props.data;
//     const { addToCart, cartItems } = useContext(ShopContext);
//     const cartItemAmount = cartItems[id];
//
//     const handleAddToCart = (e) => {
//         e.preventDefault();
//         addToCart(id);
//     };
//
//     return (
//         <div className="bg-white product">
//             <Link to={`/productPage/${id}`}>
//                 <div className="p-4 mb-10 image-div bg-slate-100">
//                     <div className="image-container">
//                         <img src={image} alt={title} className="bg-transparent blend-mode" />
//                     </div>
//                 </div>
//             </Link>
//             <div className="flex justify-between gap-5 bg-white description selection:bg-black selection:text-white">
//                 <p>
//                     <b>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</b>
//                 </p>
//                 <p>${price}</p>
//             </div>
//             <div className="flex items-center justify-end py-1 mt-2 mb-4 bg-white cart-div selection:bg-white selection:text-black">
//                 <button className="p-1 text-white bg-black addToCartBttn" onClick={handleAddToCart}>
//                     Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
//                 </button>
//             </div>
//         </div>
//     );
// };



import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/shop-context.jsx';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
    const { id, name, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(id);
    };
    
    const navigate = useNavigate();
    
    const handleProductClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/productPage/${id}`);
      };
      


    return (
        <div className='mt-10'>
            {/* <div className="bg-white product" onClick={handleProductClick}> */}
                <div className="flex items-start mb-1 sm:mb-3 image-div" onClick={handleProductClick}>  {/*bg-slate-100*/}
                    <div className="image-container w-[300px] flex items-center justify-center">
                        <img src={image} alt={name} className="bg-transparent mix-blend-multiply" />
                    </div>
                </div>
                <div className="flex justify-between text-xs bg-white sm:mt-4 sm:text-[15px] sm:gap-5 description selection:bg-black selection:text-white" >
                    <p>
                        <b>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</b>
                    </p>
                    <p>${price}</p>
                </div>
            {/* </div> */}
            <div className="flex items-center justify-end mt-2 mb-4 text-sm bg-white sm:text-md md:mt-4 cart-div selection:bg-white selection:text-black">
                <button className="p-1 text-white bg-black addToCartBttn" onClick={handleAddToCart}>
                    Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
                </button>
            </div>
        </div>
    );
};



// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/shop-context.jsx';
//
// export const Product = (props) => {
//     const { id, title, price, image } = props.data;
//     const { addToCart, cartItems } = useContext(ShopContext);
//     const cartItemAmount = cartItems[id];
//
//     const handleAddToCart = (e) => {
//         e.preventDefault();
//         addToCart(id);
//     };
//
//     return (
//         <div className="bg-white product">
//             <div className="p-4 mb-10 image-div bg-slate-100">
//                 <Link to={`/productPage/${id}`} style={{ textDecoration: 'none' }}>
//                     <div className="image-container">
//                         <img src={image} alt={title} className="bg-transparent blend-mode" />
//                     </div>
//                 </Link>
//             </div>
//             <div className="flex justify-between gap-5 bg-white description selection:bg-black selection:text-white">
//                 <Link to={`/productPage/${id}`} style={{ textDecoration: 'none' }}>
//                     <p>
//                         <b>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</b>
//                     </p>
//                 </Link>
//                 <p>${price}</p>
//             </div>
//             <div className="flex items-center justify-end py-1 mt-2 mb-4 bg-white cart-div selection:bg-white selection:text-black">
//                 <button className="p-1 text-white bg-black addToCartBttn" onClick={handleAddToCart}>
//                     Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
//                 </button>
//             </div>
//         </div>
//     );
// };
