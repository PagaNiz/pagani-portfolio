import styled from "styled-components";

export const BannerContainerStyled = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vh - 4.25rem);
    margin-top: 86px;
    overflow: hidden;
    @media (max-width: 430px) {
        margin-top: 0;
    }
`

export const ProfilePicStyled = styled.img`
    width: 500px;
    height: 500px;
    @media (max-width:430px){
        width: 300px;
        height: 300px;
    }
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

        /* Adjust background color as needed */
        h1 {
            opacity: 1;
            color: #F0F0F0;
            font-size: 2em;
            text-align: center;
            font-family: var(--font-primary);
            /* Adjust transition duration and timing function as needed */
        }
        .show h1 {
            transition: opacity 0.5s ease;
        }
        @media (max-width: 768px){
            h1{
                font-size: 1.5rem;
            }
        }
`