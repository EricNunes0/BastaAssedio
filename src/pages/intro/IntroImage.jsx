import styled, { keyframes } from "styled-components";

const IntroImageAnimation = keyframes`
    50% {
        transform: translateY(5px);
    }
`;

export const IntroImage = styled.img`
    width: 480px;
    height: 350px;
    border: unset;
    border-radius: 50px;
    animation: ${IntroImageAnimation} 3s ease-in-out infinite;
    

    @media screen and (max-width: 1080px) {
        width: 480px;
        height: 350px;
    };

    @media screen and (max-width: 768px) {
        display: none;
    };
`;