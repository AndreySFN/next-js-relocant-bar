import {Block} from "@components/atoms";
import styled from "styled-components";

const FeaturesBlock = styled.div({
    padding: '50px 0 0 0',
    display: 'flex',
    justifyContent: 'center'
})
export const FeaturesList = () => <Block>
    <h2>Бар от релокантов для релокантов, известный своими напитками и культурными мероприятиями</h2>
    <FeaturesBlock>
        <ul>
            <li>🎭 Регулярные мероприятия</li>
            <li>💸 Демократичные цены</li>
            <li>🍺 Ассортимент крафтового пива и домашних настоек</li>
        </ul>
    </FeaturesBlock>
</Block>
