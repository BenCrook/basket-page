import React from 'react';
import { BasketContentsInterface } from '../../types';
import { currencySymbol, taxRate } from '../../data';
import styles from './totals.module.css';

interface PropsInterface {
    basket: BasketContentsInterface[]
}

/**
 * Transform a number to use the local formatting system e.g 1000 -> 1,000.
 * @param numberToTransform
 */
const transformNumberForLocale = (numberToTransform: number) => {
    return numberToTransform.toLocaleString(undefined, { minimumFractionDigits: 2 })
};

/**
 * Responsible for rendering totals, displays subtotal, tax, and grand total.
 * @param props
 * @constructor
 */
const Totals = (props: PropsInterface) => {
    let subtotal = 0;

    props.basket.map((product) => {
        const productPrice = product.specialPrice ? product.specialPrice : product.price;
        subtotal = subtotal + (productPrice * product.qtyInBag);
    });

    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return (
        <div className={styles.totals}>
            <div className={`${styles.row} ${styles.subtotal}`}>
                <span>Subtotal</span>
                <span>{currencySymbol + transformNumberForLocale(subtotal)}</span>
            </div>
            <div className={`${styles.row} ${styles.vat}`}>
                <span>VAT</span>
                <span>{currencySymbol + transformNumberForLocale(tax)}</span>
            </div>
            <div className={styles.row}>
                <span>Total excluding delivery</span>
                <span className={styles.total}>{currencySymbol + transformNumberForLocale(total)}</span>
            </div>
        </div>
    )
};

export default Totals;
