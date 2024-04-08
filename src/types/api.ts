export interface MenuItem {
    name: string;
    description: string;
    price: number
}
export interface MenuCategory {
    id: string;
    category: string;
    products: Array<MenuItem>
}

export interface Response {
    beerMinPrice: number;
    tinctureMinPrice: number;
    menu: Array<MenuCategory>
}
