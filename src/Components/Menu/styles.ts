import { Offcanvas, OffcanvasBody } from "reactstrap"
import styled from "styled-components"

export const ContainerMenuStyled = styled.div`
    width: 60px;
`
export const NavMenu = styled.div`
    width: 32px;
    height: 32px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    &:hover,
        &:active,
        &:focus {
            color: var(--pink);
            border-color: var(--pink);
        }
`

export const IcoMenu = styled.span`
    width: 20px;
    &::before,
    &::after {
        content: '';
        display: block;
        height: 2px;
        width: 20px;
        background: currentColor;
        margin-top: 5px;
        transition: .3s;
        position: relative;
}
`

export const TextStyled = styled.div`
    font-family: var(--font-secondary);
`

export const OffCanvasContainerStyled = styled(Offcanvas)`
    background-color: #1E1E1E!important;
    color: white!important;
`

export const OffCanvasHeadStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    h5 {
        font-family: var(--font-secondary);
    }
`

export const OffCanvasBodyStyled = styled(OffcanvasBody)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const ButtonAnchorOffCanvas = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover,&:focus {
        color: var(--pink);
    }
`
