import {PRODUCTS} from "../../product.js";
import {Product} from './product.jsx';
import './Shop.css';

export default function Shop (){
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>BookMyKit</h1>
            </div>
            <div className="products">
              {" "}
              {PRODUCTS.map((product) => (
                    <Product key={PRODUCTS.id}  data={product}/>
              ))}
            </div>
        </div>
    )
}