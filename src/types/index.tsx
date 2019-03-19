export interface ProductInterface {
    max: number,
    name: string,
    price: number,
    qty: number,
    specialPrice: number | null,
    sku: number,
    images: string[]
}

export interface BasketContentsInterface extends ProductInterface {
    qtyInBag: number
}

export interface PriceInterface {
    price: number,
    specialPrice?: number | null
}

export interface StepsInterface {
    active: boolean,
    complete: boolean,
    title: string
}
