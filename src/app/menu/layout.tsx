import { Typography } from "@/components/atoms";
import { DishMenuCategories } from "@/components/organizms/DishMenuCategories";
import { CLR_WHITE } from "@/constants";
import { getData } from "@/utils/getData";
import styled from "@/utils/styled"
import Link from "next/link";
import { IWithCildren } from "../types";
export const dynamic = "force-dynamic";

const DishMenuWrapper = styled.div({
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: '#704F32',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: '90px',
    opacity: 0.91,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})

const ContentWrapper = styled.div({
    padding: '20px',
    width: '100%'
})

const HeaderWrapper = styled.div({
    padding: '20px',
    width: '100%',
    position: 'fixed',
    backgroundColor: '#704F32',
    top: 0,
    zIndex: 1,
    textAlign: 'center',
    borderBottom: '2px dashed white'
})

export default async function DishMenu ({children}: IWithCildren) {
    const data = await getData()
    return <DishMenuWrapper>
    <HeaderWrapper>
        <Typography bold textAlign='center' size={40} color={CLR_WHITE}>
            <Link href={'./'}>⇦</Link> МЕНЮ
        </Typography>
    </HeaderWrapper>
    <ContentWrapper>
        {children}
    </ContentWrapper>
</DishMenuWrapper>
}
