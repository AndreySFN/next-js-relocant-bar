import {ReactNode} from "react";
import {CLR_WHITE} from "@/constants";
import {Typography} from "@/components/atoms/Typography";
import { Breakpoints } from "@/constants/breakpoints";
import styled from "@/utils/styled";

const BORDER_RADIUS = '25px'

interface IContainerProps {
    imgSrc: string
    width?: string | number
    height?: string | number
}

const Container = styled.div<IContainerProps>(({imgSrc, height}: IContainerProps) => ({
    backgroundImage: `url(${imgSrc})`,
    width: '100%',
    height,
    borderRadius: BORDER_RADIUS,
    backgroundSize: 'cover',
    overflow: 'hidden'
}));

const Coverage = styled.div({
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: BORDER_RADIUS
})

interface IFeatureCardProps extends IContainerProps {
    title: string | ReactNode
    subtitle?: string | ReactNode
}

const Title = styled(Typography)({
    fontSize: 32,
    [Breakpoints.MOBILE]: {
        fontSize: 23
    }
})

const Subtitle = styled(Typography)({ 
    fontSize: 26,
    [Breakpoints.MOBILE]: {
        fontSize: 18
    }
})


export const FeatureCard = ({imgSrc, width = '100%', title, subtitle}: IFeatureCardProps) => {
    return <Container imgSrc={imgSrc} height={'300px'} width={width}>
        <Coverage>
            <Title textAlign='center' color={CLR_WHITE}>{title}</Title>
            <br/>
            {
                subtitle && <Subtitle
                    textAlign='center'
                    padding='0 10%'
                    color={CLR_WHITE}>
                    {subtitle}
                </Subtitle>
            }
        </Coverage>
    </Container>
}
