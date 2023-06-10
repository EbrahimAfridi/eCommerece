import {Link} from "react-router-dom";
import {Heart, MagnifyingGlass, ShoppingCart} from "phosphor-react";
import './navbar.css';
import {useContext} from "react";
import {ShopContext} from "../Context/shop-context.jsx";
import {PRODUCTS} from "../product.js";

export default function Navbar (){
    const { totalCartItemAmount } = useContext(ShopContext); // Get the totalCartItemAmount from the context
    const product = PRODUCTS;
    return(
        <div className="navbar">
            <Link style={{ textDecoration: 'none' }} to="/"> <p>Sneakers</p> </Link>
            <div className="links">
                <MagnifyingGlass size={25} color="#f1efef"/>
                <Link to='/wishlist'>
                    <Heart size={25} weight="fill" data={product}/>
                </Link>
                <Link  to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={25} />
                </Link>
                {totalCartItemAmount > 0 && <div className="cart-bubble"> {totalCartItemAmount} </div>}
            </div>
        </div>
    );
}
