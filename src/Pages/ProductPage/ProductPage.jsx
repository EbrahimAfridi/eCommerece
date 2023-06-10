import {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../product.js";
import "./ProductPage.css";
import MyModal from "../../components/Modal/SizeGuideModal";
import {ShopContext} from "../../Context/shop-context.jsx";

export const ProductPage = () => {
  const {addToCart, updateTotalCartItemAmount, cartItems, setSelectedSize, addToWishlist} = useContext(ShopContext);
  const [selectedOption, setSelectedOption] = useState(""); // Add selectedOption state

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSelectedOption(selectedSize); // Update selectedOption state
    setSelectedSize(id, selectedSize); // Update the selected size in context
  };
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    addToCart(id);
  };
  useEffect(() => {
    updateTotalCartItemAmount(); // Update totalCartItemAmount whenever cartItems change
  }, [cartItems,updateTotalCartItemAmount]);

  const handleAddToWishlist = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    addToWishlist(id);
  };

  // Router Code
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === parseInt(id));
  const { productName, price, productImage, companyName, productDetails, sizes } = product;

  // Modal code
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="singleProduct ">
      <div className="singleProductImage">
        <img src={productImage} alt={productName} />
      </div>
      <div className="singleProductDetails">
        <div className="coNameAndSize">
          <p>{companyName}</p>
          <button onClick={() => setShowModal(true)}>Size Guide</button>
        </div>
        <div className="singleProductNameAndPrice">
          <p>
            <b>{productName}</b>
          </p>
          <p className="price">${price}</p>
          <p className="taxDesc">inclusive of all taxes</p>
        </div>
        <p className="singleProductDescription">{productDetails}</p>
        <div className="sizeNAddToCart">
          <div className="upper">
            <select
                className="sizeSelect"
                value={selectedOption}
                onChange={handleSizeChange}
            >
              <option value="">Select Size</option>
              {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
              ))}
            </select>
            <button className="sizeSelect" onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
          <div className="lower">
            <button className="addToCartBtn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
        {showModal && <MyModal closeModal={closeModal} openModal={openModal} />}
      </div>
    </div>
  );
};

// TODO fix choosing different sizes of the same product