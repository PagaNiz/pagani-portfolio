import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "reactstrap";
import { ButtonAnchorOffCanvas, ContainerMenuStyled, IcoMenu, NavMenu, OffCanvasBodyStyled, OffCanvasContainerStyled, OffCanvasHeadStyled, TextStyled } from "./styles";

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const navigate = useNavigate();
    return (
        <ContainerMenuStyled>
            <NavMenu onClick={handleShow}>
                <IcoMenu></IcoMenu>
                <TextStyled>menu</TextStyled>
            </NavMenu>
            <OffCanvasContainerStyled
                isOpen={show}
                onClosed={handleClose}
            >
                <OffCanvasHeadStyled>
                    <h5>menu</h5>
                    <CloseButton onClick={handleClose} variant="white" />
                </OffCanvasHeadStyled>
                <OffCanvasBodyStyled>
                    <ButtonAnchorOffCanvas onClick={() => navigate("/")}>Home</ButtonAnchorOffCanvas>
                    <ButtonAnchorOffCanvas onClick={() => navigate("/projects")}>Projects</ButtonAnchorOffCanvas>
                </OffCanvasBodyStyled>
            </OffCanvasContainerStyled>
        </ContainerMenuStyled>
    )
}

export default Menu