import {FeatureCard} from "@/components/atoms";

export interface ITinctureCardProps {
    minPrice?: number;
}
export const TinctureCard = ({minPrice}: ITinctureCardProps) => <FeatureCard
    title='🥛ДОМАШНИЕ НАСТОЙКИ🥃'
    subtitle={`от ${minPrice || '- '}֏`}
    imgSrc={'/tincture.jpg'}
/>
