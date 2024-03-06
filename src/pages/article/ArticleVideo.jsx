import styled from "styled-components";

export const ArticleVideo = styled.iframe`
    width: 700px;
    height: 400px;
    border: 3px outset #d03070;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 220px;
    }
`;