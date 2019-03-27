import React from 'react';
import { ProductInterface } from '../../types';
import Price from '../price/Price';
import styles from './product-listing.module.css';

interface PropsInterface {
    products: ProductInterface[]
}

const ProductListing = (props: PropsInterface) => (
    <div className={`container ${styles.listing}`}>
        {props.products.map(product => (
            <div className={styles.product} key={product.sku}>
                <div className={styles.image}>
                    <img src={product.images[0]} alt={product.name} />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.price}>
                        <Price price={product.price} specialPrice={product.specialPrice} />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ProductListing;
