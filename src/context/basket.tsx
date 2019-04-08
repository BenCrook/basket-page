import React from 'react';
import { initialBasket } from '../data';
import { BasketContentsInterface } from '../types';

export const BasketContext = React.createContext({
    basket: initialBasket,
    updateBasket: (updatedBasket: BasketContentsInterface[]) => {}
});
