// import {Link} from "react-router-dom";
// import {MagnifyingGlass, ShoppingBag, ShoppingCart, Storefront} from "phosphor-react";
// import './navbar.css';
// import {useContext} from "react";
// import {ShopContext} from "../Context/shop-context.jsx";
// import {PRODUCTS} from "../product.js";
// import Dropdown from "./Dropdown.jsx";
//
// export default function Navbar (){
//     const { totalCartItemAmount } = useContext(ShopContext); // Get the totalCartItemAmount from the context
//     const product = PRODUCTS;
//     return(
//         <div className="navbar">
//             <Dropdown/>
//             <Link style={{ textDecoration: 'none' }} to="/"> <p>SneakEarth</p> </Link>
//             <div className="links">
//                 <MagnifyingGlass size={25} color="#f1efef"/>
//                 <Link to='/wishlist'>
//                     <ShoppingBag size={25}  data={product}/>
//                 </Link>
//                 <Link  to="/"> <Storefront size={25} /> </Link>
//                 <Link to="/cart">
//                     <ShoppingCart size={25} />
//                 </Link>
//                 {totalCartItemAmount > 0 && <div className="cart-bubble"> {totalCartItemAmount} </div>}
//             </div>
//         </div>
//     );
// }


// import { Link } from "react-router-dom";
// import { MagnifyingGlass, ShoppingBag, ShoppingCart, Storefront } from "phosphor-react";
// import { useContext, useEffect, useState } from "react";
// import axios from 'axios';
// import './navbar.css';
// import { ShopContext } from "../Context/shop-context.jsx";
// import Dropdown from "./Dropdown.jsx";

// export default function Navbar() {
//     const { totalCartItemAmount } = useContext(ShopContext);
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('https://fakestoreapi.com/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     return (
//         <div className="navbar">
//             <Dropdown />
//             <Link style={{ textDecoration: 'none' }} to="/"><p>SneakEarth</p></Link>
//             <div className="links">
//                 <MagnifyingGlass size={25} color="#f1efef" />
//                 <Link to='/wishlist'>
//                     <ShoppingBag size={25} data={products} />
//                 </Link>
//                 <Link to="/"><Storefront size={25} /></Link>
//                 <Link to="/cart">
//                     <ShoppingCart size={25} />
//                 </Link>
//                 {totalCartItemAmount > 0 && <div className="cart-bubble">{totalCartItemAmount}</div>}
//             </div>
//         </div>
//     );
// }

import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingBag, ShoppingCart, Storefront } from "phosphor-react";
import { useContext} from "react";
// import axios from 'axios';
import './navbar.css';
import { ShopContext } from "../Context/shop-context.jsx";
import Dropdown from "./Dropdown.jsx";

export default function Navbar() {
    const { totalCartItemAmount } = useContext(ShopContext);
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/sneakers');
    //             setProducts(response.data);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    return (
        <div className="navbar">
            <Dropdown className=""/>
            <Link style={{ textDecoration: 'none' }} to="/shop" className="ml-4 mr-4 text-lg sm:mr-0 sm:text-3xl"><p>SneakEarth</p></Link>
            <div className="mr-3 links sm:mr-6">
                <MagnifyingGlass size={25} color="#f1efef" />
                <Link to='/wishlist'>
                    <ShoppingBag size={25}/>
                </Link>
                <Link to="/shop"><Storefront size={25} /></Link>
                <Link to="/cart">
                    <ShoppingCart size={25} />
                </Link>
                {totalCartItemAmount > 0 && <div className="rounded-[50%] sm:right-5 absolute text-[10px] w-4 font-bold align-center justify-evenly flex text-black bg-[whitesmoke] h-4 cart-bubble top-3.5 right-2">{totalCartItemAmount}</div>}
            </div>
        </div>
    );
}

