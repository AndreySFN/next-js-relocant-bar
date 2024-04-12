import styled from "@/utils/styled";


const Button = styled.img({
    cursor: 'pointer',
    width: '100%',
    height: '100%'
})

interface ILinkProps {
    width: string | number
    height: string | number
}
export interface ISocialMediaButtonProps extends ILinkProps{
    src: string;
    href: string
}


const Link = styled.a<ILinkProps>(({width, height}: ILinkProps) => ({
    width,
    height
}))
export const SocialMediaButton = ({width, src, height, href}: ISocialMediaButtonProps) =>
    <Link href={href}  width={width} height={height}>
        <Button src={src}/>
    </Link>
