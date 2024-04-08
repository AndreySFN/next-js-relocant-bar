import {BeerCard, EventCard, MenuCard, TinctureCard} from "@components/molecules";
import {BoardGamesCard} from "@components/molecules/BoardGamesCard.tsx";
import styled from "styled-components";
import {Block} from "@components/atoms";
import {useMobile} from "@utils/useMobile.ts";
import {Response} from "@src/types";

interface IFeaturesGridProps {
    isMobile: boolean
}

const FeaturesGrid = styled.div<IFeaturesGridProps>(({isMobile}: IFeaturesGridProps) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gridTemplateRows: isMobile ? '1fr' :'1fr 1fr' ,
    gap: '20px',
    paddingBottom: '20px',
}))

export interface IFeaturesProps {
    response?: Response
}
export const Features = ({response}: IFeaturesProps) => {
    const isMobile = useMobile()
    return <Block>
        <FeaturesGrid isMobile={isMobile}>
            <EventCard/>
            <MenuCard/>
            <BeerCard minPrice={response?.beerMinPrice}/>
            <TinctureCard minPrice={response?.tinctureMinPrice}/>
        </FeaturesGrid>
        <BoardGamesCard/>
    </Block>
}
