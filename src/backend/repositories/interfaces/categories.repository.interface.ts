import { ICategory } from '@/backend/model';
import { Pool } from 'mysql2/promise';

export interface ICategoriesRepository {
    getCategories: () => Promise<Array<ICategory>>
    createCategory: (categoryName: string) => Promise<ICategory>
    updateCategoryName: (categoryId: string, categoryName: string) => Promise<ICategory>
    deleteCategory: (categoryId: string) => Promise<ICategory>
}
