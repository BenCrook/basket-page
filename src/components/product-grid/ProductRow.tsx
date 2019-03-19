import React from 'react';
import Price from '../price/Price';
import QuantityMessaging from './QuantityMessages';
import { currencySymbol } from '../../data';
import { BasketContentsInterface } from '../../types';
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

    return (
        <tr>
            <td className={`${styles.column} ${styles.productInfo}`}>
                <div className={styles.images}><img src={product.images[0]} alt=""/></div>
                <div className={styles.name}>
                    <div>{product.name}</div>
                    <div>{product.qty ? 'in Stock' : 'Out of stock'}</div>
                </div>
            </td>

            <td className={`${styles.column} ${styles.pricing}`}>
                <Price price={product.price} specialPrice={product.specialPrice}/>
            </td>

            <td className={`${styles.column} ${styles.quantity}`}>
                <span onClick={() => props.updateQty('DECREMENT', product)}>-</span>
                <input type="text" value={product.qtyInBag} readOnly />
                <span onClick={() => props.updateQty('INCREMENT', product)}>+</span>
                <div onClick={() => props.removeItem(product.sku)}>Remove</div>
                <QuantityMessaging qtyInBag={product.qtyInBag} max={product.max}/>
            </td>

            <td className={`${styles.column} ${styles.actions}`}>
                {currencySymbol + (productPrice * product.qtyInBag).toFixed(2)}
            </td>
        </tr>
    )
};

export default ProductRow;
