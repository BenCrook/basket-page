import React, { useState } from 'react';
import ProductGrid from './components/product-grid/ProductGrid';
import ProgressSteps from './components/progress-steps/ProgressSteps';
import { initialBasket } from './data';
import Totals from './components/totals/Totals';
import { BasketContentsInterface } from './types';

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
            <ProductGrid basket={basket} updateBasket={updateBasket} />
            <Totals basket={basket} />
            <button disabled={!basket.length} onClick={() => successfulCheckout(basket)}>Checkout</button>
        </>
    );

    return (
        <div className="container">
            <ProgressSteps />
            <h1 className="page-title">My Basket</h1>
            {basketIsPopulated ?  populatedBasket: emptyBasket}
        </div>
    )
};
export default App;
