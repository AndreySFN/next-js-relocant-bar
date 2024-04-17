export interface Product {
    name: string;
    description?: string;
    price: number;
}

export interface Category {
    id: string;
    category: string;
    products: Array<Product>;
}

export interface MenuData {
    beerMinPrice: number;
    tinctureMinPrice: number;
    menu: Array<Category>;
}
