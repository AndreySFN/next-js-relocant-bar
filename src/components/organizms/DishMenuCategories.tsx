import {MenuCategory} from "@/types";
import {Typography} from "@/components/atoms";
import {CLR_WHITE} from "@/constants";
import styled from "@/utils/styled";


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
                {/* TODO: Links */}
                {/* <Link to={`/menu/${id}`}> */}
                    <Typography padding='20px 0' textAlign='center' size={32} color={CLR_WHITE}>
                        {category}
                    </Typography>
                {/* </Link> */}
            </ContentWrapper>
        )}
    </ContentWrapper>
