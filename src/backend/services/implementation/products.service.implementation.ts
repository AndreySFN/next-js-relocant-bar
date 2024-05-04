import { IProductsRepository } from "@/backend/repositories/interfaces";
import { IProductsService } from "../interfaces";

export class ProductService implements IProductsService {
    constructor(private productsRepository: IProductsRepository) {}

    public getProductsByCategoryId(categoryId: string) {
        return this.productsRepository.getProductsByCategoryId(categoryId)
    }

    public createProduct(categoryId: string, productName: string, productPrice: number, description: string){
        return this.productsRepository.createProduct(categoryId, productName, productPrice, description)
    }
    
    public updateProduct(categoryId: string, productId: string, productName: string, productPrice: number, description: string){
        return this.productsRepository.updateProduct(categoryId, productId, productName, productPrice, description)
    }

    public deleteProduct(categoryId: string, productId: string){
        return this.productsRepository.deleteProduct(categoryId, productId)
    }

}