import mysql from 'mysql2/promise';
import { CategoriesRepository, ProductsRepository } from './repositories/implementations';
import { CategoriesService } from './services/implementation/categories.service.implementation';
import { ProductService } from './services/implementation/products.service.implementation';
import { CategoriesController, ProductsController } from './controllers/implementations';

const DB_URL = process.env.DB_URL
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

const pool = mysql.createPool({
    host: DB_URL,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

const REPOSITORIES = {
    categories: new CategoriesRepository(pool),
    products: new ProductsRepository(pool)
}

const SERVICES = {
    categories: new CategoriesService(REPOSITORIES.categories),
    products: new ProductService(REPOSITORIES.products)
}

export const CONTROLLERS = {
    categories: new CategoriesController(SERVICES.categories),
    products: new ProductsController(SERVICES.products)
}
