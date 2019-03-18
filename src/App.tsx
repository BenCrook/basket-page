import React, { useState } from 'react';
import ProductGrid from "./components/product-grid/ProductGrid";
import ProgressSteps from "./components/progress-steps/ProgressSteps";
import { basketContents } from "./data";

const App = () => {
    const [basket, updateBasket] = useState(basketContents);

    return (
        <div>
            <ProgressSteps />
            <ProductGrid basket={basket} updateBasket={updateBasket} />
        </div>
    )
};
export default App;
