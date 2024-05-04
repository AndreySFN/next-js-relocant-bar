export interface ICategoriesController {
    getCategories(): Promise<Response>;
    createCategory(categoryName: string): Promise<Response>;
    updateCategoryName(categoryId: string, categoryName: string): Promise<Response>;
    deleteCategory(categoryId: string): Promise<Response>;
}
