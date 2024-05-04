import { ICategory } from "@/backend/model";

export interface ICategoriesService {
    getCategories(): Promise<Array<ICategory>>;
    createCategory(categoryName: string): Promise<ICategory>;
    updateCategoryName(categoryId: string, categoryName: string): Promise<ICategory>;
    deleteCategory(categoryId: string): Promise<ICategory>;
}
