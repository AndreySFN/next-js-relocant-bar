import styled from "styled-components";
import {Typography} from "@components/atoms";
import {CLR_WHITE} from "@src/constants";
import {useJson} from "@src/utils/useJson";
import {Link, useParams} from "react-router-dom";
import {DishMenuCategories} from "@components/organizms/DishMenuCategories.tsx";
import {DishMenuContent} from "@components/organizms/DishMenuContent.tsx";

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

export const DishMenu = () => {
    const response = useJson()
    const {id} = useParams<{ id: string }>()
    const category = response?.menu?.find(category => category.id === id)
    return <DishMenuWrapper>
        <HeaderWrapper>
        <Typography bold textAlign='center' size={40} color={CLR_WHITE}>
            {!id ? <><Link to='/'>⇦</Link> МЕНЮ</> : <><Link to='/menu'>⇦</Link> {category?.category}</>}
        </Typography>
        </HeaderWrapper>
        <ContentWrapper>
            {!id ? <DishMenuCategories categories={response?.menu}/> :
                <DishMenuContent menu={category}/>}
        </ContentWrapper>
    </DishMenuWrapper>
}
