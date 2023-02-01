import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    function addProduct(product: IProduct) {
        setProducts((prevState) => [...prevState, product]);
    }

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

    return { products, loading, error, addProduct };
}