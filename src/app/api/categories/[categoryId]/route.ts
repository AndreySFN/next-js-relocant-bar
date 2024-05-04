import { CONTROLLERS } from "@/backend";
import { IWithParams } from "@/backend/types";

interface IParams {
    categoryId: string;
}

interface IRequestParams extends IWithParams<IParams> {}

export async function POST() {
    return CONTROLLERS.categories.createCategory()
}

export async function PATCH() {
    return CONTROLLERS.categories.updateCategoryName()
}

export async function DELETE() {
    return CONTROLLERS.categories.deleteCategory()
}