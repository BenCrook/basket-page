import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Basket from './routes/Basket';
import ProductListing from './routes/ProductListing';
import Header from './components/header/Header';
import 'normalize.css';
import './global-styling/variables.css';
import './global-styling/global.css';

const routes = (
    <BrowserRouter>
        <>
            <Header />
            <Route path="/" component={ProductListing} exact={true} />
            <Route path="/basket" component={Basket} />
        </>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
