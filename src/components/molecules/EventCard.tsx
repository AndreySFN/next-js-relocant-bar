import {FeatureCard} from "@components/atoms";
import url from '@assets/event.jpg'
import {TG_CHANEL_URL} from "@src/constants";
export const EventCard = () => <FeatureCard
    title='РЕГУЛЯРНЫЕ МЕРОПРИЯТИЯ'
    subtitle={
        <>
            Афиша мерориятий всегда в закреплённым сообщении в нашем<br/><br/>
            <a href={TG_CHANEL_URL}>TELEGRAM</a>
        </>
    }
    imgSrc={url}
/>
