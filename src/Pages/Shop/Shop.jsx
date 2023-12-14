import {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Product } from './product.jsx';
import './Shop.css';
import Footer from '../../components/Footer.jsx';
import { ShopContext } from '../../Context/shop-context.jsx';
import Navbar from "../../components/navbar.jsx";

export default function Shop() {

  const {
    isLoading,
    filteredProducts,
    sortOption,
    sortProducts,
  } = useContext(ShopContext);


// Sorting logic
  const sortedProducts = () => {
    if (sortOption === 'lowToHigh') {
      return filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highToLow') {
      return filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  useEffect(() => {
    console.log('Filtered Products:', sortedProducts());
  }, [filteredProducts, sortOption]);


  return (
    <div className="shop relative">
      <Navbar />
      <div className="absolute top-[90px] right-[20px]">
        {/* Add select tag for sorting */}
        <select className="rounded-sm text-md outline-black"
          value={sortOption || 'filter'}
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="Filter">Filters</option>
          <option value="Filter">Clear</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 px-5 sm:grid-cols-4 products">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          sortedProducts().map((product) => {
            console.log('Product:', product);
            return (
              <div key={product.id}>
                <Link to={`/productPage/${product.id}`}>
                  <Product data={product} />
                </Link>
              </div>
            );
          })
        )}

        {/*{isLoading ? (*/}
        {/*  <div>Loading...</div>*/}
        {/*) : (*/}
        {/*  filteredProducts.map((product) => {*/}
        {/*    console.log('Product:', product);*/}
        {/*    return (*/}
        {/*      <div key={product.id}>*/}
        {/*        <Link to={`/productPage/${product.id}`}>*/}
        {/*          <Product data={product}/>*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*  })*/}
        {/*)}*/}
      </div>
      <Footer />
    </div>
  );
}
