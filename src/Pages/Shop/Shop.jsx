// import { PRODUCTS } from "../../product.js";    //old code obj
// import { Product } from "./product.jsx";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./Shop.css";
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer.jsx";

// export default function Shop() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//               const response = await axios.get('http://localhost:3000/api/sneakers');
//               setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     return (
//     <div className="shop">
//       <div className="pl-5 my-2 text-2xl font-bold shopTitle selection:bg-black selection:text-white ">
//         <h1>Sneakers</h1>
//       </div>
//       <div className="grid grid-cols-4 gap-4 px-5 products">
//         {/*{PRODUCTS.map((product) => (*/}
//           {products.map((product) => (
//           <Link to={`/productPage/${product.id}`} key={product.id}>
//               <Product key={product.id} data={product} />
//           </Link>
//         ))}
//       </div>
//      <Footer/>
//     </div>
//   );
// }

import { useContext } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { Product } from './product.jsx';
import './Shop.css';
import Footer from '../../components/Footer.jsx';
import { ShopContext } from '../../Context/shop-context.jsx';

export default function Shop() {
  const {products, isLoading} = useContext(ShopContext);
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/sneakers');
  //       setProducts(response.data);
  //       setIsLoading(false);
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

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
