import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from './product.jsx';
import './Shop.css';
import Footer from '../../components/Footer.jsx';
import { ShopContext } from '../../Context/shop-context.jsx';

export default function Shop() {
  const {products, isLoading} = useContext(ShopContext);
  return (
    <div className="shop">
      {/*<div className="pl-5 mt-3 mb-10 text-2xl font-bold shopTitle selection:bg-black selection:text-white">*/}
      {/*  <h1>Sneakers</h1>*/}
      {/*</div>*/}
      <div className="grid grid-cols-2 gap-4 px-5 sm:grid-cols-4 products">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <Link to={`/productPage/${product.id}`}>
                <Product data={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}
