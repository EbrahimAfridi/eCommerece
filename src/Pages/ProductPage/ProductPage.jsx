import {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import MyModal from "../../components/Modal/SizeGuideModal";
import {ShopContext} from "../../Context/shop-context.jsx";
import {ShoppingBag, ShoppingCart} from "phosphor-react";

export const ProductPage = () => {
  const {addToCart, updateTotalCartItemAmount, cartItems, addToWishlist, setSelectedSize,products} = useContext(ShopContext);  const [selectedOption, setSelectedOption] = useState(""); // Add selectedOption state
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    addToWishlist(id);  // using context 
  };

  // Router Code
  const { id } = useParams();
  useEffect(() => {
    const singleData = products.find((product) => product.id === parseInt(id));
    setProduct(singleData);
    console.log("data",singleData)

  }, [id,products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { companyName, name, price, image, description, sizes } = product; // Include sizes in destructuring


  // old code obj 2 lines
  // const product = PRODUCTS.find((product) => product.id === parseInt(id));
  // const { productName, price, productImage, companyName, productDetails, sizes } = product;

  // Modal code
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="mb-20 singleProduct">
      <div className="singleProductImage">
        <img src={image} alt={name} />
      </div>
      <div className="singleProductDetails">
        <div className="coNameAndSize">
          <p>{companyName}</p>
          <button onClick={() => setShowModal(true)}>Size Guide</button>
        </div>
        <div className="singleProductNameAndPrice ">
          <p>
            <b>{name}</b>
          </p>
          <p className="price">${price}</p>
          <p className="taxDesc">inclusive of all taxes</p>
        </div>
        <p className="singleProductDescription w-[100%] basis-1/3 ">{description}</p>
        
        <div className="basis-1/3 sizeNAddToCart">
          <div className="upper">
            <select
              className="sizeSelect"
              value={selectedOption}
              onChange={handleSizeChange}
            >
              <option>Select Size</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <button className="sizeSelect" onClick={handleAddToWishlist}> Add to Wishlist <ShoppingBag className="bag-icon"/> </button>
          </div>
          <div className="lower">
            <button className="addToCartBtn" onClick={handleAddToCart}>Add to Cart <ShoppingCart size={22}/> </button>
          </div>
        </div>
        {showModal && <MyModal closeModal={closeModal} openModal={openModal} />}
      </div>
    </div>
  );
};

// TODO fix choosing different sizes of the same product