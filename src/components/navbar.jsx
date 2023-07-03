import {Link} from "react-router-dom";
import {MagnifyingGlass, ShoppingBag, ShoppingCart, Storefront} from "phosphor-react";
import './navbar.css';
import {useContext} from "react";
import {ShopContext} from "../Context/shop-context.jsx";
import {PRODUCTS} from "../product.js";
import Dropdown from "./Dropdown.jsx";

export default function Navbar (){
    const { totalCartItemAmount } = useContext(ShopContext); // Get the totalCartItemAmount from the context
    const product = PRODUCTS;
    return(
        <div className="navbar">
            <Dropdown/>
            <Link style={{ textDecoration: 'none' }} to="/"> <p>SneakEarth</p> </Link>
            <div className="links">
                <MagnifyingGlass size={25} color="#f1efef"/>
                <Link to='/wishlist'>
                    <ShoppingBag size={25}  data={product}/>
                </Link>
                <Link  to="/"> <Storefront size={25} /> </Link>
                <Link to="/cart">
                    <ShoppingCart size={25} />
                </Link>
                {totalCartItemAmount > 0 && <div className="cart-bubble"> {totalCartItemAmount} </div>}
            </div>
        </div>
    );
}
