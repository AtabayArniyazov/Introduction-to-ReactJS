import React, {useEffect, useState} from 'react';
import {Product} from "./components/product";
import axios, {AxiosError} from "axios";
import {IProduct} from "./models";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    async function fetchProducts(limit = 5): Promise<void> {
        try {
            setError('');
            setLoading(true);

            const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`);

            setProducts(response.data)
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <p className="text-center">Loading...</p> }
            { error && <p className="text-center text-red-500">{ error }</p> }
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }
        </div>
    );
}

export default App;
