import React from 'react';
import { PriceInterface } from '../../types';
import styles from './price.module.css';
import { currencySymbol } from "../../data";

const Price = (props: PriceInterface) => {
    return (
        <div>
            <div className={props.specialPrice ? styles.oldPrice : ''}>
                {currencySymbol + props.price.toFixed(2)}
            </div>

            {props.specialPrice ? (
                <div className={styles.specialPrice}>
                    {currencySymbol + props.specialPrice.toFixed(2)}
                </div>
            ) : null}
        </div>
    )
};

export default Price;