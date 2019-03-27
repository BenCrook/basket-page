import React from 'react';
import Price from '../price/Price';
import QuantityMessaging from './QuantityMessages';
import { currencySymbol } from '../../data';
import {BasketContentsInterface} from '../../types';
import styles from './product-row.module.css';

interface PropsInterface {
    product: BasketContentsInterface,
    updateQty: Function,
    removeItem: Function
}

/**
 * A table row to be rendered inside the ProductGrid component.
 * @param props
 * @constructor
 */
const ProductRow = (props: PropsInterface) => {
    const product = props.product;
    const productPrice = product.specialPrice ? product.specialPrice : product.price;

    const QuantityEditor = () => {
        return (
            <>
                <div className={styles.quantityWrapper}>
                    <span className={styles.quantityIcon} onClick={() => props.updateQty('DECREMENT', product)}>–</span>
                    <input className={styles.quantityInput} type="text" value={product.qtyInBag} readOnly/>
                    <span className={styles.quantityIcon} onClick={() => props.updateQty('INCREMENT', product)}>+</span>
                </div>
                <div className={styles.remove} onClick={() => props.removeItem(product.sku)}>Remove</div>
            </>
        )
    };

    return (
        <div className={styles.row}>
            <div className={`${styles.column} ${styles.product}`}>
                <div className={styles.image}>
                    <img src={product.images[0]} alt={product.name}/>
                </div>
                <div>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.mobilePrice}>
                        <Price price={product.price} specialPrice={product.specialPrice}/>
                    </div>
                    <div className={styles.inStock}>{product.qty ? 'In Stock' : 'Out of stock'}</div>
                </div>
                <div className={styles.mobileQuantity}>
                    <QuantityEditor/>
                </div>
            </div>

            <div className={`${styles.column} ${styles.price}`}>
                <Price price={product.price} specialPrice={product.specialPrice}/>
            </div>

            <div className={`${styles.column} ${styles.quantity}`}>
                <QuantityEditor/>
                <QuantityMessaging qtyInBag={product.qtyInBag} max={product.max}/>
            </div>

            <div className={`${styles.column} ${styles.subtotal}`}>
                {currencySymbol + (productPrice * product.qtyInBag).toFixed(2)}
            </div>
        </div>
    )
};

export default ProductRow;
