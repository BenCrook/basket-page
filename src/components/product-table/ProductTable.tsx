import React, { useContext } from 'react';
import { BasketContentsInterface } from '../../types';
import ProductRow from './ProductRow';
import styles from './product-table.module.css';
import { BasketContext } from '../../context/basket';

interface PropsInterface {
    basket: BasketContentsInterface[]
}

/**
 * Product table, responsible for rendering products in a table. Typically used in basket page and checkout.
 * todo: Lift updateQty functions up into App.js and consider using a reducer hook (useReducer)
 * @param props
 * @constructor
 */
const ProductTable = (props: PropsInterface) => {
    const {basket, updateBasket} = useContext(BasketContext);

    /**
     * Updates the quantity based on the specified action.
     * @param actionType
     * @param product
     */
    const updateQty = (actionType: string, product: BasketContentsInterface) => {
        const updatedBasket = basket.map((loopedProduct) => {
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

        updateBasket(updatedBasket);
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

        updateBasket(updatedBasket);
    };

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.product}>Product</div>
                <div className={styles.price}>Price</div>
                <div className={styles.quantity}>Quantity</div>
                <div className={styles.subtotal}>Subtotal</div>
            </div>
            <div className="content">
                {props.basket.map((product) => {
                    return <ProductRow key={product.sku} product={product} updateQty={updateQty} removeItem={removeItem}/>
                })}
            </div>
        </div>
    )
};

export default ProductTable;