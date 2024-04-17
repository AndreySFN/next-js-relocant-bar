import { DishMenuCategories } from "@/components/organizms/DishMenuCategories";
import { getData } from "@/utils/getData";
export const dynamic = "force-dynamic";

export default async function DishMenu () {
    const data = await getData()
    return <DishMenuCategories categories={data?.menu}/>
}
