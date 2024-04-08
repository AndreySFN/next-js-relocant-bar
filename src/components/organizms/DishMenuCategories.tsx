import styled from "styled-components";
import {MenuCategory} from "@src/types";
import {Link} from "react-router-dom";
import {Typography} from "@components/atoms";
import {CLR_WHITE} from "@src/constants";


const ContentWrapper = styled.div({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export interface IDishMenuCategoriesProps {
    categories: Array<MenuCategory>
}
export const DishMenuCategories = ({categories}: IDishMenuCategoriesProps) =>
    <ContentWrapper>
        {categories?.map(({id, category}: MenuCategory) =>
            <ContentWrapper>
                <Link to={`/menu/${id}`}>
                    <Typography padding='20px 0' textAlign='center' size={32} color={CLR_WHITE}>
                        {category}
                    </Typography>
                </Link>
            </ContentWrapper>
        )}
    </ContentWrapper>
