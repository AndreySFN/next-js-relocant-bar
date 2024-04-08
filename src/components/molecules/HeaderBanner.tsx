import imgUrl from '../../assets/header.jpg'
import styled from "styled-components";
import {Typography} from "@/components/atoms";
import {CLR_WHITE} from "@/constants";
import { Breakpoints } from '@/constants/breakpoints';

const HeaderBannerWrapper = styled.div({
    padding: '20px 5%',
    width: '100%',
    [Breakpoints.TABLET]: {
        padding: 0
    }
})

const HeaderBannerContainer = styled.div({
    backgroundImage: `url(${imgUrl})`,
    height: 470,
    width: '100%',
    borderRadius: 32,
    padding: '0 10% 0 4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundSize: 'cover',
    [Breakpoints.TABLET]: {
        borderRadius: 0
    }
})

export const HeaderBanner = () => {
    return <HeaderBannerWrapper>
        <HeaderBannerContainer>
            <Typography color={CLR_WHITE}><h1>Релокант - бар с русским акцентом</h1></Typography>
            <Typography color={CLR_WHITE}><h2>Тематические вечера, крафтовое пиво, игры и концерты.</h2></Typography>
        </HeaderBannerContainer>
    </HeaderBannerWrapper>
}
