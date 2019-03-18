import React from 'react';
import styles from './product-grid.module.css'
import { BasketContentsInterface } from "../../types";

export interface PropsInterface {
    basket: Array<BasketContentsInterface>
    updateBasket: Function
}

const ProductGrid = (props: PropsInterface) => {
    /**
     * Responsible for updating the quantity.
     * @param actionType - Whether to increment or decrement the quantity in the basket
     * @param sku - The product's SKU, used to update the correct product.
     */
    const updateQty = (actionType: string, sku:number) => {
        const max = 10;
        const min = 0;

        const updatedBasket = props.basket.map((product) => {
            const qtyInBag = product.qtyInBag;
            if (product.sku === sku) {
                if (actionType === 'INCREMENT' && qtyInBag < max) {
                    product.qtyInBag = qtyInBag + 1;
                } else if (actionType === 'DECREMENT' && qtyInBag > min) {
                    product.qtyInBag = qtyInBag - 1;
                }
            }
            return product;
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
                return (
                        <tr key={product.sku}>
                            <td className={`${styles.column} ${styles.productInfo}`}>
                                {product.name}
                            </td>

                            <td className={`${styles.column} ${styles.pricing}`}>
                                {product.price}
                            </td>

                            <td className={`${styles.column} ${styles.quantity}`}>
                                <span onClick={() => updateQty('INCREMENT', product.sku)}>+</span>
                                <input type="text" value={product.qtyInBag} readOnly />
                                <span onClick={() => updateQty('DECREMENT', product.sku)}>-</span>
                            </td>

                            <td className={`${styles.column} ${styles.actions}`}>
                                {product.price * product.qtyInBag}
                            </td>
                        </tr>
                )
            })}
            </tbody>
        </table>
    )
};

export default ProductGrid;