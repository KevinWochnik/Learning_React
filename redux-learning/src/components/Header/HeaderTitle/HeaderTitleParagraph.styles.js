import styled from "styled-components";

export const HeaderTitleParagraph = styled.p`

font-size: ${({theme:{fontSize}})=>fontSize.xxl};
color: ${({theme:{colors}})=>colors.lightGreen};
text-transform: uppercase;
letter-spacing: 1px;
`;