import { CONTROLLERS } from "@/backend";
import { IWithParams } from "@/backend/types";

interface IParams {
    categoryId: string;
}

interface IRequestParams extends IWithParams<IParams> {}


export async function GET() {
    return CONTROLLERS.products.getProductsByCategoryId()
}

export async function POST() {
    return CONTROLLERS.products.createProduct()
}
