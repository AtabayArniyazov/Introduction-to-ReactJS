import React, {useEffect, useState} from 'react';
import {Product} from "./components/product";
import axios from "axios";
import {IProduct} from "./models";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchProducts(limit = 5) {
        setLoading(true);

        return await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`);
    }

    useEffect(() => {
        fetchProducts()
            .then((response) => setProducts(response.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <p className="text-center">Loading...</p> }
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }
        </div>
    );
}

export default App;
