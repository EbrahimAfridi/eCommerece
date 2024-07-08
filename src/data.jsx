import {useState, useEffect} from "react";
import SneaksAPI from 'sneaks-api';

const Sneaker = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
    //     instance of the SneakerAPI
        const sneaks = new SneaksAPI();

    //     fetch sneaker data
        sneaks.getProducts(1).then(response => {
            setSneakers(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Sneaker</h1>
            <ul>
                {sneakers.map(sneakers => (
                    <li key={sneakers.id} >{ sneakers.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sneaker;