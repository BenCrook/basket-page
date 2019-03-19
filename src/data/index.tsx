import { BasketContentsInterface } from '../types'
import img1 from '../images/products/product-img-1.png';
import img2 from '../images/products/product-img-2.png';

export const currencySymbol: string = '\u00A3'; // £
export const taxRate: number = 0.2; // 20%

export const initialBasket: BasketContentsInterface[] = [
    {
        max: 10,
        name: "Oversized grandpa's cool jumper in brown and red",
        price: 1878.00,
        qty: 15,
        qtyInBag: 1,
        specialPrice: null,
        sku: 123,
        images: [
            img1
        ]
    },
    {
        max: 10,
        name: "Merry Christmas jumper in bright blue" ,
        price: 39.00,
        qty: 42,
        qtyInBag: 2,
        specialPrice: 34.00,
        sku: 321,
        images: [
            img2
        ]
    }
];
