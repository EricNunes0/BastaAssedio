import styled from "styled-components";

let FooterLinkColor = "#fff";
export const FooterLink = styled.button`
    background-color: unset;
    background-image: linear-gradient(180deg, ${FooterLinkColor} 0%, ${FooterLinkColor} 100%);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    color: ${FooterLinkColor};
    border: unset;
    font-size: 18px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
        background-size: 100% 1px;
    }
`;