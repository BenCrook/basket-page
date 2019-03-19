import { BasketContentsInterface, ProductInterface } from '../types'

export const currencySymbol:string = '\u00A3';

export const products: ProductInterface[] = [
    {
        name: "Oversized grandpa's cool jumper in brown and red",
        price: 1878.00,
        qty: 15,
        specialPrice: null,
        sku: 123,
        images: [

        ]
    },
    {
        name: "Merry Christmas jumper in bright blue" ,
        price: 39.00,
        qty: 42,
        specialPrice: 34.00,
        sku: 321,
        images: [

        ]
    }
];

export const basketContents: BasketContentsInterface[] = [
    {
        name: "Oversized grandpa's cool jumper in brown and red",
        price: 1878.00,
        qty: 15,
        qtyInBag: 1,
        specialPrice: null,
        sku: 123,
        images: [

        ]
    },
    {
        name: "Merry Christmas jumper in bright blue" ,
        price: 39.00,
        qty: 42,
        qtyInBag: 2,
        specialPrice: 34.00,
        sku: 321,
        images: [

        ]
    }
];