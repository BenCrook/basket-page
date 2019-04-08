import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Basket from './routes/Basket';
import ProductListing from './routes/ProductListing';
import Header from './components/header/Header';
import { initialBasket } from './data';
import { BasketContext } from './context/basket';

// todo: Make add to basket/update basket functions re-usable
const App = () => {
    const [basket, updateBasket] = useState(initialBasket);

    useEffect(() => {
        console.log(basket);
    }, [basket]);

    return (
        <BrowserRouter>
            <>
                <BasketContext.Provider value={{basket, updateBasket}}>
                    <Header />
                    <Route path="/" component={ProductListing} exact={true} />
                    <Route path="/basket" component={Basket} exact={true} />
                </BasketContext.Provider>
            </>
        </BrowserRouter>
    );
};

export default App;
