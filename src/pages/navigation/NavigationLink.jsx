import styled from "styled-components";

export const NavigationLink = styled.button`
    background-color: unset;
    color: #fff;
    border: unset;
    border-radius: 50px;
    font-family: "Poppins";
    font-size: 18px;
    padding: 5px 10px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    @media screen and (max-width: 768px) {
        border-radius: 0px;
        padding: 15px 10px;
    }
`;