import {FeatureCard} from "@components/atoms";
import url from '@assets/beer.jpg'

export interface IBearCardProps {
    minPrice?: number;
}
export const BeerCard = ({minPrice}: IBearCardProps) => <FeatureCard
    title='🍺ПИВО🍻'
    subtitle={`от ${minPrice || '- '}֏`}
    imgSrc={url}
/>
