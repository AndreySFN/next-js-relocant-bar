import {Typography} from "@components/atoms/Typography.tsx";
import {CLR_WHITE} from "@src/constants";
import styled from "styled-components";
import {useMobile} from "@src/utils";

export interface IDishMenuElementProps {
    name: string;
    description: string;
    price: number;
}

interface IDishMenuElementWrapperProps {
    isMobile: boolean
}

const DishMenuElementWrapper = styled.div<IDishMenuElementWrapperProps>(({isMobile}: IDishMenuElementWrapperProps) => ({
    width: isMobile ? '100%' : '40%',
    display: 'flex'
}))

const DishPriceWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    minWidth: 'fit-content',
})

const DotWrapper = styled.div`
  flex-grow: 1;
  border-bottom: 4px dotted white;
  position: relative;
  bottom: 4px;
`;

export const DishMenuElement = ({description, price, name}: IDishMenuElementProps) => {
    const isMobile = useMobile()
    return <DishMenuElementWrapper isMobile={isMobile}>
        <div style={{alignSelf: 'end'}}>
            <div>
                <Typography textAlign='center' size={32} color={CLR_WHITE}>
                    {name}
                </Typography>
            </div>
            {description && <div>
                <Typography textAlign='center' size={20} italic color={CLR_WHITE}>
                    {description}
                </Typography>
            </div>}
        </div>
        <DotWrapper/>
        <DishPriceWrapper>
            <Typography textAlign='center' size={24} color={CLR_WHITE}>
                {price} ֏
            </Typography>
        </DishPriceWrapper>
    </DishMenuElementWrapper>
}
