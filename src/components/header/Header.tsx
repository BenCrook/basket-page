import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="container">
        <Link to="/">Products</Link>
        <Link to="/basket">Basket</Link>
    </div>
);

export default Header;