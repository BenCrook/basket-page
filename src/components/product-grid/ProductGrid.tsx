import React from 'react';
import { BasketContentsInterface } from '../../types';
import ProductRow from './ProductRow';
import styles from './product-grid.module.css';

interface PropsInterface {
    basket: BasketContentsInterface[]
    updateBasket: Function
}

/**
 * Product grid, responsible for rendering products in a table. Typically used in basket page and checkout.
 * todo: Lift updateQty functions up into App.js and consider using a reducer hook (useReducer)
 * @param props
 * @constructor
 */
const ProductGrid = (props: PropsInterface) => {
    /**
     * Updates the quantity based on the specified action.
     * @param actionType
     * @param product
     */
    const updateQty = (actionType: string, product: BasketContentsInterface) => {
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
     * @param sku
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
        <table className={styles.table}>
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