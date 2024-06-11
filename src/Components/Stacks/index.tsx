import { Fragment } from "react/jsx-runtime"
import { StacksLogo } from "../../assets/stacksLogo"
import { ContainerH1Styled, ContainerStacksStyled, ContainerStyled, StacksH1Styled } from "./styles"


const Stacks = () => {
    return (
        <Fragment>
                <ContainerStyled>
                    <ContainerH1Styled>
                        <StacksH1Styled>STACKS</StacksH1Styled>
                    </ContainerH1Styled>
                    <ContainerStacksStyled>
                        {StacksLogo.map((stack) => (
                            <div>
                                <img src={stack.image} alt="Stack Logo" />
                            </div>
                        ))}
                    </ContainerStacksStyled>
                </ContainerStyled>
        </Fragment>
    )
}

export default Stacks