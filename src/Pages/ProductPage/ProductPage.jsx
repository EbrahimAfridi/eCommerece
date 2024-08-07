import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import MyModal from "../../components/Modal/SizeGuideModal";
import { ShopContext } from "../../Context/shop-context.jsx";
import { ShoppingBag, ShoppingCart } from "phosphor-react";
import Navbar from "../../components/navbar.jsx";

export const ProductPage = () => {
  const {
    addToCart,
    updateTotalCartItemAmount,
    cartItems,
    addToWishlist,
    setSelectedSize,
    products,
  } = useContext(ShopContext);
  const [selectedOption, setSelectedOption] = useState(""); // Add selectedOption state
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSelectedOption(selectedSize); // Update selectedOption state
    setSelectedSize(id, selectedSize); // Update the selected size in context
  };
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    addToCart(id);
    const cartIcon = document.querySelector(".cart-icon");
    // Add a class to trigger the animation
    cartIcon.classList.add("bike-animation");

    // Remove the class after the animation completes
    setTimeout(() => {
      cartIcon.classList.remove("bike-animation");
    }, 2000);
  };

  useEffect(() => {
    updateTotalCartItemAmount(); // Update totalCartItemAmount whenever cartItems change
  }, [cartItems, updateTotalCartItemAmount]);

  const handleAddToWishlist = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    addToWishlist(id); // using context
    const bagIcon = document.querySelector(".bag-icon");

    // Add a class to trigger the animation
    bagIcon.classList.add("rotate-animation");

    // Remove the class after the animation completes
    setTimeout(() => {
      bagIcon.classList.remove("rotate-animation");
    }, 2000);
  };

  // Router Code
  const { id } = useParams();
  useEffect(() => {
    const singleData = products.find((product) => product.id === parseInt(id));
    setProduct(singleData);
    console.log("data", singleData);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { companyName, name, price, image, description, sizes } = product;

  // Modal code
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <Navbar />
      <div className="singleProduct">
        <div className="singleProductImage">
          <img src={image} alt={name} />
        </div>
        <div className="singleProductDetails">
          <div className="coNameAndSize">
            <p>{companyName}</p>
            <button onClick={openModal}>Size Guide</button>
          </div>
          <div className="singleProductNameAndPrice ">
            <p>
              <b>{name}</b>
            </p>
            <p className="price">${price}</p>
            <p className="taxDesc">inclusive of all taxes</p>
          </div>
          <p className="singleProductDescription w-[100%] basis-1/3">
            {description}
          </p>

          <div className="basis-1/3 sizeNAddToCart">
            <div className="upper">
              <select
                value={selectedOption}
                onChange={handleSizeChange}
                className="rounded-md w-full text-md outline-none border-zinc-300 hover:border-zinc-600 shadow-sm border p-2 tracking-wider"
              >
                <option>Select Size</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddToWishlist}
                className="flex items-center justify-center bg-white rounded-md text-md outline-none border-zinc-300 hover:border-zinc-600 shadow-sm border p-2 tracking-wider w-full"
              >
                {" "}
                Add to Wishlist <ShoppingBag className="bag-icon" />
              </button>
            </div>
            <div className="lower">
              <button
                onClick={handleAddToCart}
                className="gap-5 flex items-center justify-center bg-black text-white rounded-md text-md shadow-sm border p-2 tracking-wider w-full"
              >
                Add to Cart <ShoppingCart size={20} />{" "}
              </button>
            </div>
          </div>
          {showModal && (
            <MyModal closeModal={closeModal} openModal={openModal} />
          )}
        </div>
      </div>
    </>
  );
};

// TODO: fix choosing different sizes of the same product
