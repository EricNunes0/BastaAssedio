import styled from "styled-components";

export const IntroButton = styled.button`
    width: 130px;
    height: 55px;
    background-color: #fff;
    color: #333;
    border: unset;
    border-radius: 50px;
    text-transform: uppercase;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    };
`;