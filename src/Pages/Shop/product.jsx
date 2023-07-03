import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context.jsx";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    addToCart(id);
  };

  return (
      <div className="product bg-white">
          <div className="image-div bg-slate-100 mb-10 p-4">
              <div className="image-container">
                  <img src={productImage} alt={productName} className="blend-mode bg-transparent" />
              </div>
          </div>
          <div className="description flex justify-between gap-5 selection:bg-black selection:text-white bg-white">
              <p>
                  <b>{productName.length > 20 ? `${productName.slice(0, 20)}...` : productName}</b>
              </p>
              <p>${price}</p>
          </div>
          <div className="cart-div py-1 items-center justify-end selection:bg-white selection:text-black flex bg-white mt-2 mb-4">
              <button className="addToCartBttn bg-black text-white p-1" onClick={handleAddToCart}>
                  Add to Cart {cartItemAmount > 0 && <> [{cartItemAmount}] </>}
              </button>
          </div>
      </div>
  );
};
