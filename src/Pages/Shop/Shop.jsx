import {PRODUCTS} from "../../product.js";
import {Product} from './product.jsx';
import './Shop.css';
import {Link} from "react-router-dom";

export default function Shop (){
    return(
            <div className="shop">
                <div className="shopTitle">
                    <h1>Sneakers</h1>
                </div>
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Link to={`/productPage/${product.id}`} key={product.id}>
                            <Product key={product.id} data={product} />
                        </Link>
                    ))}
                </div>

            </div>
    )
}