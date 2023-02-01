import React from 'react';
import { Product } from "./components/product";
import { useProducts } from "./hooks/products";
import { Loader } from "./components/loader";
import { ErrorMessage } from "./components/errorMessage";
import { Modal } from "./components/modal";
import { CreateProduct } from "./components/createProduct";

function App() {
    const { products, loading, error } = useProducts();


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error &&  <ErrorMessage error={error} />}
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }

            <Modal title="Create New Product">
                <CreateProduct/>
            </Modal>
        </div>
    );
}

export default App;
