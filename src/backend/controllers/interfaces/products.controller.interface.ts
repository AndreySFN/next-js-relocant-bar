export interface IProductsController {
    getProductsByCategoryId(categoryId: string): Promise<Response>; 
    createProduct(categoryId: string, productName: string, productPrice: number, description: string): Promise<Response>;
    updateProduct(productId: string, productName: string, productPrice: number, description: string): Promise<Response>;
    deleteProduct(productId: string): Promise<Response>;
}