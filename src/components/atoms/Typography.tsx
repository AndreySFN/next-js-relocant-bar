import {CLR_BLACK} from "@/constants";
import styled from "@/utils/styled";

export interface ITypographyProps {
    size?: number
    color?: string
    textAlign?: string
    padding?: string | number
    bold?: boolean
    italic?: boolean
    overflow?: string
}

export const Typography = styled.span<ITypographyProps>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ({padding, size, textAlign, overflow, color = CLR_BLACK, bold, italic}: ITypographyProps) => ({
        fontSize: size,
        color,
        overflow,
        padding,
        textAlign: textAlign || 'start',
        fontWeight: bold && 'bold',
        fontStyle: italic && 'italic',
    })
);
