import { ICategoriesRepository } from "@/backend/repositories/interfaces";
import { ICategoriesService } from "../interfaces";

export class CategoriesService implements ICategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository) { }
    
    public async getCategories(){
        return this.categoriesRepository.getCategories()
    }

    public async createCategory(categoryName: string){
        return this.categoriesRepository.createCategory(categoryName)
    }

    public async updateCategoryName(categoryId: string, categoryName: string){
        return this.categoriesRepository.updateCategoryName(categoryId, categoryName);
    }
    
    public async deleteCategory(categoryId: string){
        return this.categoriesRepository.deleteCategory(categoryId)
    }
}