import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./product.jsx";
import "./Shop.css";
import Footer from "../../components/Footer.jsx";
import { ShopContext } from "../../Context/shop-context.jsx";
import Navbar from "../../components/navbar.jsx";
import VideoGrid from "../../components/VideoGrid/VideoGrid.jsx";
import Filter from "../../components/Filter/Filter.jsx";

export default function Shop() {
  const { isLoading, filteredProducts, sortOption } = useContext(ShopContext);
  // Sorting logic
  const sortedProducts = () => {
    if (sortOption === "lowToHigh") {
      return filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      return filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  useEffect(() => {
    console.log("Filtered Products:", sortedProducts());
  }, [filteredProducts, sortOption]);

  useEffect(() => {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
      video.play();
    });

    console.log("video playing");
  }, []);

  return (
    <div className="shop">
      <Navbar />
      <div className="landingPage w-[calc(100vw - 8px)]">
        {/* <img
          className="w-[calc(100vw - 8px)]"
          src="https://crepdogcrew.com/cdn/shop/collections/Tab_Banners_1.png?v=1684822190"
          alt="banner image of sneaker"
        /> */}
        <img
          className="w-[calc(100vw - 8px)]"
          src="./sneaker-banner-image.jpg"
          alt="banner image of sneaker"
        />
      </div>

      <div className="flex flex-col">
        <Filter />
        <div className="flex flex-wrap gap-4 px-5 products">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            sortedProducts().map((product) => (
              <div
                key={product.id}
                className="flex-1 md:min-w-[calc(25%-1rem)] min-w-[calc(50%-1rem)]"
              >
                <Link to={`/productPage/${product.id}`}>
                  <Product data={product} />
                </Link>
              </div>
            ))
          )}
        </div>
        <VideoGrid />
        <div className="chooseUs">
          <h1 className="font-sans font-medium mb-8">Why choose us!</h1>
          <p className="font-sans font-light tracking-wide text-lg whitespace-break-spaces leading-10">
            <span className="bg-blue-700 p-1.5 font-bold text-white">
              SNEAKEARTH
            </span>{" "}
            is bringing to life, fashion that is both stylish and responsible.{" "}
            <br />
            With innovative planet-friendly materials and always-in-style trendy
            designs, we deliver access to a never-before-experienced comfort
            with our products while striking the right balance with your
            lifestyle quotient.
          </p>
          <div className="icons flex justify-center gap-4 py-5">
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/PerfectFit_eba3f4ea-15fb-4af6-9b06-d34bd5790cc4.svg?v=1688997442"
                alt=""
              />
              <h4 className="p-1.5 bg-green-700 text-white">COMFORTABLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/EasyToStyle_ac7ac370-8a7a-4df3-9fef-ff5f6b1af077.svg?v=1688997442"
                alt=""
              />
              <h4 className="p-1.5 bg-green-700 text-white">EASY TO STYLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/Sustainable_5389836c-e054-4ef6-aa90-291f2a38af64.svg?v=1688997442"
                alt=""
              />
              <h4 className="p-1.5 bg-green-700 text-white">SUSTAINABLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/EverydayWear_9a51f1da-a8a5-4712-ba7f-0b2c3cb010d1.svg?v=1688997442"
                alt=""
              />
              <h4 className="p-1.5 bg-green-700 text-white">EVERYDAY WEAR</h4>
            </div>
          </div>
        </div>

        <div className="stores">
          <img
            src="https://neemans.com/cdn/shop/files/Offline_store_page_homepage_2_a3433b2d-a1a8-4cb4-a4ba-cb7ce51578ba.jpg?v=1697712844"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
