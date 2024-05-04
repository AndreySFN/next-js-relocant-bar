import { IProduct } from "@/backend/model";

export interface IProductsRepository {
    getProductsByCategoryId: (categoryId: string) => Promise<Array<IProduct>> 
    createProduct: (categoryId: string, productName: string, productPrice: number, description: string) => Promise<IProduct>
    updateProduct: (categoryId: string, productId: string, productName: string, productPrice: number, description: string) => Promise<IProduct> 
    deleteProduct: (categoryId: string, productId: string) => Promise<IProduct>
}