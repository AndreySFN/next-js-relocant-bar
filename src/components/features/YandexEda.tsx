import { YANDEX_EDA_URL } from "@/constants";
import styled from "@/utils/styled";
import Image from 'next/image';
import Link from 'next/link';

const MainContainer = styled.div({
    maxWidth: '340px',
    backgroundColor: '#F7DA01',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '30px',
    overflow: 'hidden',
    padding: '10px',
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'none!important'
});


const CustomLink = styled(Link)({
    textDecoration: 'none'
});

export const YandexEda = () => {
    return (
        <CustomLink href={YANDEX_EDA_URL}>
            <MainContainer>
                <Image alt="Yandex.Eda" src='/social-media/yandex-eda.jpg' height={100} width={100} />
                <h2>Заказать на Яндекс.Еде</h2>
            </MainContainer>
        </CustomLink>
    );
}
