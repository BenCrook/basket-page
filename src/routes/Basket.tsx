import React, { useContext } from 'react';
import ProductTable from '../components/product-table/ProductTable';
import ProgressSteps from '../components/progress-steps/ProgressSteps';
import Totals from '../components/totals/Totals';
import { BasketContentsInterface } from '../types';
import styles from '../app.module.css';
import { BasketContext } from '../context/basket';

const successfulCheckout = (basket: BasketContentsInterface[]) => {
    console.log(basket);
    console.log('You have successfully checked out!');
};

// todo: Include update basket function from context
const Basket = () => {
    const {basket} = useContext(BasketContext);
    const emptyBasket = (<div>Your basket is empty.</div>);
    const populatedBasket = (
        <>
            <ProductTable basket={basket}/>
            <div>
                <button className={styles.continue}>Continue Shopping</button>
                <span className={styles.totals}>
                    <Totals basket={basket} />
                    <button className="primary large"
                            disabled={!basket.length}
                            onClick={() => successfulCheckout(basket)}>
                        Checkout Securely
                    </button>
                </span>
            </div>
        </>
    );

    return (
        <div className="container">
            <ProgressSteps />
            <h1 className="page-title">My Basket</h1>
                {basket.length ? populatedBasket : emptyBasket}
        </div>
    );
};

export default Basket;
