import { ICategory } from '@/backend/model';
import { Pool } from 'mysql2/promise';

export class CategoriesRepository {
    constructor(private db: Pool) {}

    async getCategories(): Promise<Array<ICategory>> {
        const query = 'SELECT * FROM categories;';
        const [results] = await this.db.query(query);
        return results;
    }

    async createCategory(categoryName: string): Promise<ICategory> {
        const query = 'INSERT INTO categories (id, categoryName) VALUES (UUID(), ?);';
        const [result] = await this.db.execute(query, [categoryName]);
        return result;
    }

    async updateCategoryName(categoryId: string, categoryName: string): Promise<ICategory> {
        const query = 'UPDATE categories SET categoryName = ? WHERE id = ?;';
        const [result] = await this.db.execute(query, [categoryName, categoryId]);
        return result;
    }

    async deleteCategory(categoryId: string): Promise<ICategory> {
        const query = 'DELETE FROM categories WHERE id = ?;';
        const [result] = await this.db.execute(query, [categoryId]);
        return result;
    }
}
