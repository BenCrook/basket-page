import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/basket';

const Header = () => {
    const {basket} = useContext(BasketContext);

    return (
        <div className="container">
            <Link to="/">Products</Link>
            <Link to="/basket">Basket</Link>
            Items in basket: {basket.length}
        </div>
    )
};

export default Header;