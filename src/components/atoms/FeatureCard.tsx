import styled from "styled-components";
import {ReactNode} from "react";
import {CLR_WHITE} from "@/constants";
import {Typography} from "@/components/atoms/Typography";

const BORDER_RADIUS = '25px'

interface IContainerProps {
    imgSrc: string
    width?: string | number
    height?: string | number
}

const Container = styled.div<IContainerProps>((props) => ({
    backgroundImage: `url(${props.imgSrc})`,
    width: '100%',
    height: props.height,
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

const Title = styled(Typography)

export const FeatureCard = ({imgSrc, width = '100%', title, subtitle}: IFeatureCardProps) => {
    const titleSize = screenWidth > 414 ? 32 : 23
    const subTitleSize = screenWidth > 414 ? 26 : 18
    return <Container imgSrc={imgSrc} height={'300px'} width={width}>
        <Coverage>
            <Typography textAlign='center' size={titleSize} color={CLR_WHITE}>{title}</Typography>
            <br/>
            {
                subtitle && <Typography
                    textAlign='center'
                    size={subTitleSize}
                    padding='0 10%'
                    color={CLR_WHITE}>
                    {subtitle}
                </Typography>
            }
        </Coverage>
    </Container>
}
