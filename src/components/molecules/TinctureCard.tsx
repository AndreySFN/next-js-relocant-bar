import {FeatureCard} from "@components/atoms";
import url from '@assets/tincture.jpg'

export interface ITinctureCardProps {
    minPrice?: number;
}
export const TinctureCard = ({minPrice}: ITinctureCardProps) => <FeatureCard
    title='🥛ДОМАШНИЕ НАСТОЙКИ🥃'
    subtitle={`от ${minPrice || '- '}֏`}
    imgSrc={url}
/>
