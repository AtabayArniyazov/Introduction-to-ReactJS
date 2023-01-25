import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }</p>
            <button
                className="py-2 px-4 border bg-yellow-400"
                onClick={() => setDetails((prevState) => !prevState)}>
                Show details
            </button>
            {details && <div>
                <p>
                    {product.description}
                </p>
            </div>}
        </div>
    )
}