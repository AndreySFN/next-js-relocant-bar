import {Block, Typography} from "@components/atoms";
import styled from "styled-components";
import {YandexMap} from "@components/widgets";
import {IMobileProps} from "@src/types";
import {useMobile} from "@src/utils";
import TgLogo from '@assets/social-media/telegram.svg'
import InstLogo from '@assets/social-media/instagram.svg'
import {SocialMediaButton} from "@components/molecules/SocialMediaButton.tsx";
import {INSTAGRAM_URL, TG_CHANEL_URL} from "@src/constants";

const ContextWrapper = styled.div<IMobileProps>(({isMobile}: IMobileProps) => ({
    paddingTop: '15px',
    display: isMobile ? 'block' : 'flex',
    width: '100%',
    height: isMobile ? 'auto' : 400,
    justifyContent: 'space-between'
}))

const ContactsContainer = styled.div<IMobileProps>(({isMobile}: IMobileProps) => ({
    width: isMobile ? '100%' : '49%',
    display: 'flex',
    flexDirection: 'column',
}))

const SocialMediaContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 20,
    alignItems: 'center',
    flexGrow: '1'
})

export const Contacts = () => {
    const isMobile = useMobile()
    return <Block>
        <h2><Typography bold size={40}>Как найти нас?</Typography></h2>
        <ContextWrapper isMobile={isMobile}>
            <ContactsContainer isMobile={isMobile}>
                <h2><Typography>Наш адресс:</Typography> г. Ереван ул. Ханджяна, д. 7</h2>
                <Block>
                    <h2>А ещё мы есть в соцсетях и будем рады вашей подписке :)</h2>
                </Block>
                <SocialMediaContainer>
                    <SocialMediaButton href={TG_CHANEL_URL} width={isMobile ? '100px' : '150px'} height='60%' src={TgLogo}/>
                    <SocialMediaButton href={INSTAGRAM_URL} width={isMobile ? '100px' : '150px'}  height='60%' src={InstLogo}/>
                </SocialMediaContainer>
            </ContactsContainer>
            <YandexMap isMobile={isMobile}/>
        </ContextWrapper>
    </Block>
}
