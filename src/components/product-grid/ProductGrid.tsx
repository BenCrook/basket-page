import React from 'react';
import {BasketContentsInterface, ProductInterface} from "../../types";
import ProductRow from "./ProductRow";

interface PropsInterface {
    basket: BasketContentsInterface[]
    updateBasket: Function
}

// todo: Lift updateQty functions up into App.js and consider using reducers
const ProductGrid = (props: PropsInterface) => {
    const updateQty = (actionType: string, product: ProductInterface) => {
        const updatedBasket = props.basket.map((loopedProduct) => {
            const skusMatch = loopedProduct.sku === product.sku;
            const qtyInBag = loopedProduct.qtyInBag;
            const canIncrement = qtyInBag < product.max;
            const canDecrement = qtyInBag > 1;

            if (skusMatch) {
                if (actionType === 'INCREMENT' && canIncrement) {
                    loopedProduct.qtyInBag = qtyInBag + 1;
                } else if (actionType === 'DECREMENT' && canDecrement) {
                    loopedProduct.qtyInBag = qtyInBag - 1;
                }
            }
            return loopedProduct;
        });

        props.updateBasket(updatedBasket);
    };

    /**
     * Removes an item from the basket, uses filter to avoid directly editing state.
     * @param sku - The product's SKU, used to update the relevant product.
     */
    const removeItem = (sku: number) => {
        const updatedBasket = props.basket.filter((product) => {
            if (product.sku !== sku) {
                return true;
            }
        });

        props.updateBasket(updatedBasket);
    };

    return (
        <table>
            <tbody>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            {props.basket.map((product) => {
                return <ProductRow key={product.sku} product={product} updateQty={updateQty} removeItem={removeItem}/>
            })}
            </tbody>
        </table>
    )
};

export default ProductGrid;