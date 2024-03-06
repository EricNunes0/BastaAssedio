import styled from "styled-components";

export const ArticleParagraph = styled.p`
    color: ${(prop) => prop.theme === "dark" ? "#333" : "#fff"};
    text-align: center;
    margin: 10px 0;
`;