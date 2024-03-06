import styled, { keyframes } from "styled-components";

const ArticleImageAnimation = keyframes`
    50% {
        transform: translateY(5px);
    }
`;

export const ArticleImage = styled.img`
    width: 300px;
    height: 300px;
    border: 5px solid #f7e4bb;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    animation: ${ArticleImageAnimation} 3s ease-in-out infinite;

    @media screen and (max-width: 768px) {
        /*display: none;*/
        width: 200px;
        height: 200px;
    };
`;