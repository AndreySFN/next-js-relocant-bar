import { IProduct } from '@/backend/model';
import { Pool } from 'mysql2/promise';

export class ProductsRepository {
    constructor(private db: Pool) {}

    async getProductsByCategoryId(categoryId: string): Promise<Array<IProduct>> {
        const query = 'SELECT * FROM products WHERE categoryId = ?;';
        const [results] = await this.db.query(query, [categoryId]);
        return results;
    }

    async createProduct(categoryId: string, productName: string, productPrice: number, description: string): Promise<IProduct> {
        const query = 'INSERT INTO products (id, categoryId, name, price, description) VALUES (UUID(), ?, ?, ?, ?);';
        const [result] = await this.db.execute(query, [categoryId, productName, productPrice, description]);
        return result;
    }

    async updateProduct(categoryId: string, productId: string, productName: string, productPrice: number, description: string): Promise<IProduct> {
        const query = 'UPDATE products SET categoryId = ?, name = ?, price = ?, description = ? WHERE id = ?;';
        const [result] = await this.db.execute(query, [categoryId, productName, productPrice, description, productId]);
        return result;
    }

    async deleteProduct(categoryId: string, productId: string): Promise<IProduct> {
        const query = 'DELETE FROM products WHERE categoryId = ? AND id = ?;';
        const [result] = await this.db.execute(query, [categoryId, productId]);
        return result;
    }
}
