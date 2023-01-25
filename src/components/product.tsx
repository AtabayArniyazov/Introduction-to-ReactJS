import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const buttonBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const buttonClasses = ['py-2 px-4 border', buttonBgClassName];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }</p>
            <button
                className={ buttonClasses.join(' ') }
                onClick={() => setDetails((prevState) => !prevState)}>
                { `${details ? 'Hide' : 'Show'} details` }
            </button>
            {details && <div>
                {product.description}
                <br/>
                <br/>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{ product.rating.rate }</span></p>
            </div>}
        </div>
    )
}