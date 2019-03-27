import React, {useState} from 'react';
import ProductTable from './components/product-table/ProductTable';
import ProgressSteps from './components/progress-steps/ProgressSteps';
import {initialBasket} from './data';
import Totals from './components/totals/Totals';
import {BasketContentsInterface} from './types';
import styles from './app.module.css';

const successfulCheckout = (basket: BasketContentsInterface[]) => {
    console.log(basket);
    console.log('You have successfully checked out!');
};

// todo: Reduce width of the page title as it's overlapping other elements
const App = () => {
    const [basket, updateBasket] = useState(initialBasket);
    const basketIsPopulated = basket.length;
    const emptyBasket = <div>Your basket is empty.</div>;
    const populatedBasket = (
        <>
            <ProductTable basket={basket} updateBasket={updateBasket}/>
            <div>
                <button className={styles.continue}>Continue Shopping</button>
                <span className={styles.totals}>
                    <Totals basket={basket}/>
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
            <ProgressSteps/>
            <h1 className="page-title">My Basket</h1>
            {basketIsPopulated ? populatedBasket : emptyBasket}
        </div>
    )
};
export default App;
