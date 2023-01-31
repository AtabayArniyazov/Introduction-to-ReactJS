import React, {useEffect, useState} from 'react';
import {Product} from "./components/product";
import axios from "axios";
import {IProduct} from "./models";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    async function fetchProducts(limit = 5) {
        return await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`);
    }

    useEffect(() => {
        fetchProducts().then((response) => setProducts(response.data));
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { products.map((product) => <Product product={product} key={product.id} />) }
        </div>
    );
}

export default App;
