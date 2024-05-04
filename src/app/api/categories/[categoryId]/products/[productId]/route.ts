import { CONTROLLERS } from "@/backend";
import { IWithParams } from "@/backend/types";


interface IParams {
    categoryId: string;
    productId: string;
}

interface IRequestParams extends IWithParams<IParams> {}

export async function PATCH() {
    return CONTROLLERS.products.updateProduct()
}

export async function DELETE() {
    return CONTROLLERS.products.deleteProduct()
}