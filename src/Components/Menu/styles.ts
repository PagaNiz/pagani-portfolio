import { Offcanvas, OffcanvasBody } from "reactstrap";
import styled from "styled-components";

export const ContainerMenuStyled = styled.div`
  width: 3.75rem;
`;
export const NavMenu = styled.div`
  width: 2rem;
  height: 2rem;
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
`;

export const IcoMenu = styled.span`
  width: 20px;
  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 20px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
`;

export const TextStyled = styled.div`
  font-family: var(--font-secondary);
`;

export const OffCanvasContainerStyled = styled(Offcanvas)`
  background-color: #1e1e1e !important;
  color: white !important;
`;

export const OffCanvasHeadStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  h5 {
    font-family: var(--font-secondary);
    user-select: none;
  }
`;

export const OffCanvasBodyStyled = styled(OffcanvasBody)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const ButtonAnchorOffCanvas = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover,
  &:focus {
    color: var(--pink);
  }
`;
