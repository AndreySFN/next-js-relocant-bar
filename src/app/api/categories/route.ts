import { CONTROLLERS } from "@/backend";

export async function GET(){
    return CONTROLLERS.categories.getCategories()
}