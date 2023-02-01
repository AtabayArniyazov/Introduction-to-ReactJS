import React, { useState } from 'react';
import { Product } from "./components/product";
import { useProducts } from "./hooks/products";
import { Loader } from "./components/loader";
import { ErrorMessage } from "./components/errorMessage";
import { Modal } from "./components/modal";
import { CreateProduct } from "./components/createProduct";
import { IProduct } from "./models";

function App() {
    const { products, loading, error, addProduct } = useProducts();
    const [modal, setModal] = useState(true);

    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error &&  <ErrorMessage error={error} />}
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }

            {modal && <Modal title="Create New Product" onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal> }
        </div>
    );
}

export default App;
