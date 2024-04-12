import {MenuCategory} from "@/types";
import {DishMenuElement} from "@/components/atoms";
import styled from "@/utils/styled";

export interface IDishMenuContentProps {
    menu?: MenuCategory
}

const DishMenuContentWrapper = styled.div({
    display: 'flex',
    maxWidth: '100%',
    flexBasis: '50%',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
})
export const DishMenuContent = ({menu}: IDishMenuContentProps) => {
    return <DishMenuContentWrapper>
        {menu?.products?.map(product =>
            <DishMenuElement description={product.description} name={product.name} price={product.price}/>
        )}
    </DishMenuContentWrapper>
}
