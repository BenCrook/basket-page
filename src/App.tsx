import React, { useState } from 'react';
import ProductGrid from "./components/product-grid/ProductGrid";
import ProgressSteps from "./components/progress-steps/ProgressSteps";
import { basketContents } from "./data";

const App = () => {
    const [basket, updateBasket] = useState(basketContents);
    const basketIsPopulated = basket.length;
    const emptyBasketMessage = <div>Your basket is empty.</div>;

    return (
        <div>
            <ProgressSteps />
            {basketIsPopulated ?
                <ProductGrid basket={basket} updateBasket={updateBasket} /> : emptyBasketMessage}
            <button disabled={!basket.length} onClick={() => console.log(basket)}>Checkout</button>
        </div>
    )
};
export default App;
