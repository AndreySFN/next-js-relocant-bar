import {FeatureCard} from "@/components/atoms";

export interface IBearCardProps {
    minPrice?: number;
}
export const BeerCard = ({minPrice}: IBearCardProps) => <FeatureCard
    title='🍺ПИВО🍻'
    subtitle={`от ${minPrice || '- '}֏`}
    imgSrc={'/beer.jpg'}
/>
