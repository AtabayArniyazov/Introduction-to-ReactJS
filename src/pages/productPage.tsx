import { useProducts } from "../hooks/products";
import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { IProduct } from "../models";
import { Loader } from "../components/loader";
import { ErrorMessage } from "../components/errorMessage";
import { Product } from "../components/product";
import { Modal } from "../components/modal";
import { CreateProduct } from "../components/createProduct";

export function ProductPage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, openModal, closeModal } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        closeModal();
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error &&  <ErrorMessage error={error} />}
            { !loading &&  products.map((product) => <Product product={product} key={product.id} />) }

            {modal && <Modal title="Create New Product" onClose={() => closeModal()}>
                <CreateProduct onCreate={createHandler}/>
            </Modal> }
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={() => openModal()}>
                Add Product
            </button>
        </div>
    );
}