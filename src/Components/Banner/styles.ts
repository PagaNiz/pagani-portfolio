import styled from "styled-components";

export const BannerContainerStyled = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vh - 69.75px);
    margin-top: 86px;
    overflow: hidden;
`

export const BannerStyled = styled.div`
     position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #000;

        /* Adjust background color as needed */
        h1 {
            opacity: 1;
            color: #F0F0F0;
            /* Adjust transition duration and timing function as needed */
        }
        .show h1 {
            transition: opacity 0.5s ease;
        }
`