import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./product.jsx";
import "./Shop.css";
import Footer from "../../components/Footer.jsx";
import { ShopContext } from "../../Context/shop-context.jsx";
import Navbar from "../../components/navbar.jsx";

export default function Shop() {
  const { isLoading, filteredProducts, sortOption, sortProducts } =
    useContext(ShopContext);

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
        <img
          className="w-[calc(100vw - 8px)]"
          src="https://crepdogcrew.com/cdn/shop/collections/Tab_Banners_1.png?v=1684822190"
          alt="banner image of sneaker"
        />
        {/*<img src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_632/a59e7925442231.5634559ab5a21.jpg" alt="banner image of sneaker" />*/}
        {/*<img src="https://i.imgur.com/UDdaryt.jpeg" alt="" />*/}
      </div>

      <div className="relative">
        <div className="absolute top-[10px] right-[20px]">
          <select
            className="rounded-sm text-md outline-black border-slate-900 border-2 border-solid"
            value={sortOption || "filter"}
            onChange={(e) => sortProducts(e.target.value)}
          >
            <option value="Filter">Filters</option>
            <option value="Filter">Clear</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
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
        <div className="videoSlider">
          <video
            autoPlay
            loop
            muted
            src="https://i.imgur.com/yB1JD3N.mp4"
            type="video/mp4"
          />
          <video
            autoPlay
            loop
            muted
            src="https://i.imgur.com/JY6pgod.mp4"
            type="video/mp4"
          />
          <video
            autoPlay
            loop
            muted
            src="https://i.imgur.com/58Kq4WQ.mp4"
            type="video/mp4"
          />
          <video
            onPlay
            loop
            muted
            src="https://i.imgur.com/KlUEZY0.mp4"
            type="video/mp4"
          />
          {/*<video autoPlay loop muted src="https://cdn.shopify.com/videos/c/vp/d9434865498449bcbfdb179234ffbad6/d9434865498449bcbfdb179234ffbad6.HD-1080p-2.5Mbps-17248744.mp4" type='video/mp4'/>*/}
          {/*<video autoPlay loop muted src="https://cdn.shopify.com/s/files/1/2428/5565/files/shopgracias-videos-gif1a84c6a5.mp4?v=1691732358" type='video/mp4' />*/}
          {/*<video autoPlay loop muted src="https://cdn.shopify.com/videos/c/vp/53c3d179188e4d7a86c1946fd98c553c/53c3d179188e4d7a86c1946fd98c553c.HD-1080p-2.5Mbps-17248542.mp4" type='video/mp4' />*/}
          {/*<video autoPlay loop muted src="https://cdn.shopify.com/videos/c/vp/bff6c5a3f8b2476a966e18aa3e520149/bff6c5a3f8b2476a966e18aa3e520149.HD-1080p-2.5Mbps-17248825.mp4" type='video/mp4' />*/}
        </div>

        <div className="chooseUs">
          <h1>Why choose us?</h1>
          <p>
            SNEAKEARTH is bringing to life, fashion that is both stylish and
            responsible. With innovative planet-friendly materials and
            always-in-style trendy designs, we deliver access to a
            never-before-experienced comfort with our products while striking
            the right balance with your lifestyle quotient.
          </p>
          <div className="icons flex justify-center gap-4 py-5">
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/PerfectFit_eba3f4ea-15fb-4af6-9b06-d34bd5790cc4.svg?v=1688997442"
                alt=""
              />
              <h4>COMFORTABLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/EasyToStyle_ac7ac370-8a7a-4df3-9fef-ff5f6b1af077.svg?v=1688997442"
                alt=""
              />
              <h4>EASY TO STYLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/Sustainable_5389836c-e054-4ef6-aa90-291f2a38af64.svg?v=1688997442"
                alt=""
              />
              <h4>SUSTAINABLE</h4>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-[10vw] h-[60px] sm:w-[100%]"
                src="https://neemans.com/cdn/shop/files/EverydayWear_9a51f1da-a8a5-4712-ba7f-0b2c3cb010d1.svg?v=1688997442"
                alt=""
              />
              <h4>EVERYDAY WEAR</h4>
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
