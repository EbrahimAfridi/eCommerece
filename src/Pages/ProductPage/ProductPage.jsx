import { useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../product.js";
import "./ProductPage.css";
import MyModal from "../../components/Modal/SizeGuideModal";

export const ProductPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === parseInt(id));
  const { productName, price, productImage, companyName, productDetails } =
    product;
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
            <select className="sizeSelect">
              <option>Select Size</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="sizeSelect">Add to Wishlist</button>
          </div>
          <div className="lower">
            <button className="addToCartBtn">Add to Cart</button>
          </div>
        </div>
        {showModal && <MyModal closeModal={closeModal} openModal={openModal} />}
      </div>
    </div>
  );
};
