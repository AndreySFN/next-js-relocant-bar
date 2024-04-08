import {BeerCard, EventCard, MenuCard, TinctureCard} from "@/components/molecules";
import {BoardGamesCard} from "@/components/molecules/BoardGamesCard";
import styled from "styled-components";
import {Block} from "@/components/atoms";
import {Response} from "@/types";
import { Breakpoints } from "@/constants/breakpoints";

const FeaturesGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr' ,
    gap: '20px',
    paddingBottom: '20px',
    [Breakpoints.TABLET]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr'
    }
})

export interface IFeaturesProps {
    response?: Response
}
export const Features = ({response}: IFeaturesProps) => {
    return <Block>
        <FeaturesGrid>
            <EventCard/>
            <MenuCard/>
            <BeerCard minPrice={response?.beerMinPrice}/>
            <TinctureCard minPrice={response?.tinctureMinPrice}/>
        </FeaturesGrid>
        <BoardGamesCard/>
    </Block>
}
