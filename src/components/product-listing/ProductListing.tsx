import React, { useContext } from 'react';
import { BasketContentsInterface, ProductInterface } from '../../types';
import Price from '../price/Price';
import styles from './product-listing.module.css';
import Button from '../button/Button';
import { BasketContext } from '../../context/basket';

interface PropsInterface {
    products: ProductInterface[]
}

const ProductListing = (props: PropsInterface) => {
    const {basket, updateBasket} = useContext(BasketContext);

    const addToBag = (product: ProductInterface) => {
        const productAlreadyInBag: boolean = !!basket.filter(loopedProduct => loopedProduct.sku === product.sku).length;
        let updatedBasket = [];

        if (productAlreadyInBag) {
            updatedBasket = basket.map(loopedProduct => {
                if (productAlreadyInBag && loopedProduct.sku === product.sku) {
                    loopedProduct.qtyInBag = loopedProduct.qtyInBag + 1;
                }

                return loopedProduct;
            });
        } else {
            // Need to use a different variable here to convert product to use BasketContentsInterface
            const newProduct = product as BasketContentsInterface;
            newProduct.qtyInBag = 1;
            updatedBasket = [...basket, newProduct];
        }

        updateBasket(updatedBasket);
    };

    return (
        <div className={`container ${styles.listing}`}>
            {props.products.map(product => (
                <div className={styles.product} key={product.sku}>
                    <div className={styles.image}>
                        <img src={product.images[0]} alt={product.name} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>{product.name}</div>
                        <div>{product.sku}</div>
                        <div className={styles.price}>
                            <Price price={product.price} specialPrice={product.specialPrice} />
                        </div>
                    </div>
                    <div>
                        <Button callback={() => addToBag(product)}>Add to Basket</Button>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default ProductListing;
