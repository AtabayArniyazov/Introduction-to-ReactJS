import React from 'react';
import { Product } from "./components/product";
import { useProducts } from "./hooks/products";

function App() {
    const { products, loading, error } = useProducts();


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <p className="text-center">Loading...</p> }
            { error && <p className="text-center text-red-500">{ error }</p> }
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }
        </div>
    );
}

export default App;
