import { ProductInterface, BasketContentsInterface } from '../types'
import img1 from '../images/products/product-img-1.png';
import img2 from '../images/products/product-img-2.png';

export const currencySymbol: string = '\u00A3'; // £
export const taxRate: number = 0.2; // 20%

export const products: ProductInterface[] = [
    {
        max: 10,
        name: "Oversized grandpa's cool jumper in brown and red",
        price: 1878.00,
        qty: 15,
        specialPrice: null,
        sku: 12345,
        images: [
            img1
        ]
    },
    {
        max: 10,
        name: "Merry Christmas jumper in bright blue" ,
        price: 39.00,
        qty: 42,
        specialPrice: 34.99,
        sku: 12346,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "Another Jumper" ,
        price: 399.99,
        qty: 42,
        specialPrice: null,
        sku: 12347,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "Yet Another Jumper" ,
        price: 19.99,
        qty: 42,
        specialPrice: null,
        sku: 12348,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "Blue Fleece" ,
        price: 44.99,
        qty: 42,
        specialPrice: 39.75,
        sku: 12349,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "Purple Hat" ,
        price: 39.99,
        qty: 42,
        specialPrice: 34.99,
        sku: 12350,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "1990 Trainers" ,
        price: 99.49,
        qty: 42,
        specialPrice: null,
        sku: 12351,
        images: [
            img2
        ]
    },
    {
        max: 10,
        name: "Gray Pants" ,
        price: 37.50,
        qty: 42,
        specialPrice: null,
        sku: 12352,
        images: [
            img2
        ]
    }
];

export const initialBasket: BasketContentsInterface[] = [];
