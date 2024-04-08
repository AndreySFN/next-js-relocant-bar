import imgUrl from '../../assets/header.jpg'
import styled from "styled-components";
import {useMobile} from "@src/utils";
import {IMobileProps} from "@src/types";
import {Typography} from "@components/atoms";
import {CLR_WHITE} from "@src/constants";

const HeaderBannerWrapper = styled.div<IMobileProps>(({isMobile}: IMobileProps) => ({
    padding: isMobile ? '0' : '20px 5%',
    width: '100%'
}))

const HeaderBannerContainer = styled.div<IMobileProps>(({isMobile}: IMobileProps) => ({
    backgroundImage: `url(${imgUrl})`,
    height: 470,
    width: '100%',
    borderRadius: isMobile ? 0 : 32,
    padding: '0 10% 0 4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundSize: 'cover'
}))
export const HeaderBanner = () => {
    const isMobile = useMobile()
    return <HeaderBannerWrapper isMobile={isMobile}>
        <HeaderBannerContainer isMobile={isMobile}>
            <Typography color={CLR_WHITE}><h1>Релокант - бар с русским акцентом</h1></Typography>
            <Typography color={CLR_WHITE}><h2>Тематические вечера, крафтовое пиво, игры и концерты.</h2></Typography>
        </HeaderBannerContainer>
    </HeaderBannerWrapper>
}
