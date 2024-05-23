import { Breakpoints } from "@/constants/breakpoints";
import { CLR_WHITE } from "../../constants";
import { Typography } from "./Typography";
import styled from "@/utils/styled";

export interface IDishMenuElementProps {
    name: string;
    description?: string;
    price: number;
}

const DishElementWrapper = styled.div({
    fontSize: '32px',
    color: 'white',
    minWidth: '45%',
    flexBasis: '100%',
})

const DotPriceWrapper = styled.div({
    display: 'flex'
})

const Dots = styled.div({
    flex: 1,
    borderBottom: '2px dotted white',
    minWidth: '40px'
})

const Description = styled.div({
    fontSize: '16px'
})

export const DishMenuElement = ({ description, price, name }: IDishMenuElementProps) => {
    return <DishElementWrapper>
    <DotPriceWrapper>
        <div>
            {name}
        </div>
        <Dots />
        <div>
            {price}
        </div>
    </DotPriceWrapper>
    {description && <Description>{description}</Description>}
    </DishElementWrapper>
}