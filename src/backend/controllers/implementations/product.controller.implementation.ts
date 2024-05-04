import { IProductsService } from "@/backend/services/interfaces"

export class ProductsController {
    constructor(private productsService: IProductsService) { }

    public getProductsByCategoryId(categoryId: string) {
        return this.productsService.getProductsByCategoryId(categoryId)
    }

    public createProduct(categoryId: string, productName: string, productPrice: number, description: string) {
        return this.productsService.createProduct(categoryId, productName, productPrice, description)
    }

    public updateProduct (categoryId: string, productId: string, productName: string, productPrice: number, description: string) {
        return this.productsService.updateProduct(categoryId, productId, productName, productPrice, description)
    }

    public deleteProduct (categoryId: string, productId: string) { // TODO: А зачем нам categoryId? Вопрос, которым теперь занимается прокуратура
        return this.productsService.deleteProduct(categoryId, productId)
    }
}