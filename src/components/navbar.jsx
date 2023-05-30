import {Link} from "react-router-dom";
import {MagnifyingGlass, ShoppingCart} from "phosphor-react";
import './navbar.css';
import {useContext} from "react";
import {ShopContext} from "../Context/shop-context.jsx";

export default function Navbar (){
    const { totalCartItemAmount } = useContext(ShopContext); // Get the totalCartItemAmount from the context
    // const totalCartItems = updateTotalCartItemAmount;
    return(
        <div className="navbar">
            <Link style={{ textDecoration: 'none' }} to="/"> <p>Sneakers</p> </Link>
            <div className="links">
                <Link>
                    <MagnifyingGlass size={32} />
                </Link>
                <Link  to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
                <div className="cart-bubble"> {totalCartItemAmount} </div>
            </div>
        </div>
    );
}
