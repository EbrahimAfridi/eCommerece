import { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context.jsx';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
    const { id, name, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(id);
    };
    const handleProductClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/productPage/${id}`);
      };

    return (
        <div className='mt-10'>
                <div onClick={handleProductClick} className="flex items-start mb-1 sm:mb-3 image-div">  {/*bg-slate-100*/}
                    <div className="image-container w-[340px] flex items-center justify-center">
                        <img src={image} alt={name} className="bg-transparent mix-blend-multiply" />
                    </div>
                </div>
                <div className="flex justify-between text-xs bg-transparent sm:mt-4 sm:text-[15px] sm:gap-5 description selection:bg-black selection:text-white" >
                    <p>
                        <b>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</b>
                    </p>
                    <p>${price}</p>
                </div>
            <div className="flex items-center justify-end mt-2 mb-4 text-sm bg-white sm:text-md md:mt-4 cart-div selection:bg-white selection:text-black">
                <button className="p-1 w-full text-white bg-black addToCartBttn" onClick={handleAddToCart}>
                    Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
                </button>
            </div>
        </div>
    );
};