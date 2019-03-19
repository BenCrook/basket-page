import React from 'react';
import { BasketContentsInterface } from '../../types';
import { currencySymbol, taxRate } from '../../data';

interface PropsInterface {
    basket: BasketContentsInterface[]
}

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

    const tax = (subtotal * taxRate);
    const total = (subtotal + tax);

    return (
        <div>
            <div>
                <span>Subtotal</span>
                <span>{currencySymbol + subtotal.toFixed(2)}</span>
            </div>
            <div>
                <span>Tax</span>
                <span>{currencySymbol + tax.toFixed(2)}</span>
            </div>
            <div>
                <span>Total</span>
                <span>{currencySymbol + total.toFixed(2)}</span>
            </div>
        </div>
    )
};

export default Totals;
