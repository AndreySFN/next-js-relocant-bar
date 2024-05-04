import { ICategoriesRepository } from "@/backend/repositories/interfaces/categories.repository.interface";
import { ICategoriesController } from "../interfaces/categories.controller.interface";
import { createApiResponse } from "@/backend/utils";

export class CategoriesController implements ICategoriesController {
    private categoryRepository: ICategoriesRepository;

    constructor(categoryRepository: ICategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    public async getCategories() {
        return createApiResponse(this.categoryRepository.getCategories())
    }

    public async createCategory(categoryName: string) {
        return createApiResponse(this.categoryRepository.createCategory(categoryName))
    }

    public async updateCategoryName(categoryId: string, categoryName: string) {
        return createApiResponse(this.categoryRepository.updateCategoryName(categoryId, categoryName))
    }

    public async deleteCategory(categoryId: string) {
        return createApiResponse(this.categoryRepository.deleteCategory(categoryId))
    }
}
