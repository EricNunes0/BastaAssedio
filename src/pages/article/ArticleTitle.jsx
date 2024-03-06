import styled from "styled-components";

export const ArticleTitle = styled.h1`
    color: ${(prop) => prop.theme === "dark" ? "#333" : "#fff"};
    text-align: center;
    margin: 10px 0;
`;