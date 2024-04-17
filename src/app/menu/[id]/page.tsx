import { DishMenuElement } from "@/components/atoms";
import { getData } from "@/utils/getData"
import styled from "@/utils/styled";

interface IParams {
    id: number
}

interface IProps {
    params: IParams
}

const DishMenuContentWrapper = styled.div({
    display: 'flex',
    maxWidth: '100%',
    flexBasis: '50%',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
})


export default async function Category({ params: { id } }: IProps) {
    const { menu } = await getData();

    return <DishMenuContentWrapper>
        {menu[id].products?.map(product =>
            <DishMenuElement description={product.description} name={product.name} price={product.price} />
        )}
    </DishMenuContentWrapper>
}
