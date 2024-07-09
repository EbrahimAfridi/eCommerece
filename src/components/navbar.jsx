import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import {
  MagnifyingGlass,
  ShoppingBag,
  ShoppingCart,
  Storefront,
  User,
  X,
} from "phosphor-react";
import { useContext, useEffect, useRef } from "react";
import "./navbar.css";
import { ShopContext } from "../Context/shop-context.jsx";

export default function Navbar() {
  const {
    totalCartItemAmount,
    showSearchInput,
    setShowSearchInput,
    handleSearchIconClick,
    searchTerm,
    setSearchTerm,
  } = useContext(ShopContext);

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (showSearchInput) {
      // Focus on the search input when it becomes visible
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const handleClearIconClick = () => {
    setSearchTerm(""); // Clear search term
    setShowSearchInput(false); // Hide the input
  };

  return (
    <div className="navbar fixed top-0 h-[12vh] z-10">
      <Link
        style={{ textDecoration: "none" }}
        to="/shop"
        className="ml-4 mr-4 text-lg sm:mr-0 sm:text-3xl overflow-hidden font-sans"
      >
        {" "}
        {"SneakEarth".split("").map((char, index) => (
          <motion.p className="overflow-hidden inline-block"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 * index, }}
            > 
              {char}
          </motion.p>
        ))}
      </Link>

      <div>
        {showSearchInput && (
          <div className="search-input flex items-center relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search sneakers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-2 outline-none rounded-2xl md:w-56 md:h-8 placeholder:text-stone-700"
            />
            {searchTerm && (
              <X
                size={18}
                color="#000"
                className="absolute top-1/2 right-2 ml-4 transform -translate-y-1/2 cursor-pointer"
                onClick={handleClearIconClick}
              />
            )}
          </div>
        )}
      </div>

      <div className="mr-3 links sm:mr-6">
        <MagnifyingGlass
          onClick={handleSearchIconClick}
          color="#f1efef"
          size={25}
        />
        <Link to="/account">
          <User size={25} color="#f1efef" />
        </Link>
        <Link to="/wishlist">
          <ShoppingBag size={25} />
        </Link>
        <Link to="/shop">
          <Storefront size={25} />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={25} />
        </Link>
        {totalCartItemAmount > 0 && (
          <div
            className="rounded-[50%] sm:right-5 absolute text-[10px] font-bold align-center flex h-4
              justify-evenly text-black bg-[whitesmoke] w-4 cart-bubble top-3.5 right-2"
          >
            {totalCartItemAmount}
          </div>
        )}
      </div>
    </div>
  );
}
