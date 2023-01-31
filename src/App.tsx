import React from 'react';
import { Product } from "./components/product";
import { useProducts } from "./hooks/products";
import { Loader } from "./components/loader";

function App() {
    const { products, loading, error } = useProducts();


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && Loader() }
            { error && <p className="text-center text-red-500">{ error }</p> }
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }
        </div>
    );
}

export default App;
