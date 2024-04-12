import {Block, Typography} from "@/components/atoms";
import styled from "@/utils/styled";
import {YandexMap} from "@/components/widgets";
import {SocialMediaButton} from "@/components/molecules/SocialMediaButton";
import {INSTAGRAM_URL, TG_CHANEL_URL} from "@/constants";
import { Breakpoints } from "@/constants/breakpoints";

const ContextWrapper = styled.div({
    paddingTop: '15px',
    display: 'flex',
    width: '100%',
    height: 400,
    justifyContent: 'space-between',
    [Breakpoints.TABLET]: {
        display: 'block',
        height: 'auto'
    }
})

const ContactsContainer = styled.div({
    width: '49%',
    display: 'flex',
    flexDirection: 'column',
    [Breakpoints.TABLET]: {
        width: '100%'
    }
})

const SocialMediaContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 20,
    alignItems: 'center',
    flexGrow: '1'
})

export const Contacts = () => {
    return <Block>
        <h2><Typography bold size={40}>Как найти нас?</Typography></h2>
        <ContextWrapper>
            <ContactsContainer>
                <h2><Typography>Наш адресс:</Typography> г. Ереван ул. Ханджяна, д. 7</h2>
                <Block>
                    <h2>А ещё мы есть в соцсетях и будем рады вашей подписке :)</h2>
                </Block>
                <SocialMediaContainer>
                    <SocialMediaButton href={TG_CHANEL_URL} width={'150px'} height='60%' src={'/social-media/telegram.svg'}/> {/*TODO: Refactoring*/}
                    <SocialMediaButton href={INSTAGRAM_URL} width={'150px'}  height='60%' src={'/social-media/instagram.svg'}/>
                </SocialMediaContainer>
            </ContactsContainer>
            <YandexMap/>
        </ContextWrapper>
    </Block>
}
