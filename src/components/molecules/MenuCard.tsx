import {FeatureCard} from "@components/atoms";
import url from '@assets/menu.jpg'
import {Link} from "react-router-dom";

export const MenuCard = () => <FeatureCard
    title='АССОРТИМЕНТ ЕДЫ И НАПИТКОВ'
    subtitle={
        <>
            С удовольствием порадуем вас нашими напитками и закусками<br/><br/>
            <Link to='/menu'>
                СМОТРЕТЬ МЕНЮ
            </Link>
        </>
    }
    imgSrc={url}
/>
