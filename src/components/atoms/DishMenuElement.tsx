import { Breakpoints } from "@/constants/breakpoints";
import {CLR_WHITE} from "../../constants";
import { Typography } from "./Typography";
import styled from "@/utils/styled";

export interface IDishMenuElementProps {
    name: string;
    description: string;
    price: number;
}

const DishMenuElementWrapper = styled.div({
    width: '40%',
    display: 'flex',
    [Breakpoints.TABLET]: {
        width: '100%'
    }
})

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
    return <DishMenuElementWrapper>
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
