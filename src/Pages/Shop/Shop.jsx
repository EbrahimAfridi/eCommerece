import {PRODUCTS} from "../../product.js";
import {Product} from './product.jsx';
import './Shop.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function Shop (){
    return(
            <div className="shop">
                <div className="shopTitle">
                    <h1>Sneakers</h1>
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