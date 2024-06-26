import styled from "styled-components";

export const ContainerStyled = styled.div`
  border: 5px solid var(--pink);
  border-radius: 25px;
  position: relative;
  width: 672px;
  margin: auto;
  margin-bottom: 2rem;
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 430px) {
    width: 75%;
  }
`;
export const ContainerH1Styled = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
  top: -25px;
  left: 38%;
  @media (min-width: 621px) and (max-width: 769px) {
    left: 32%;
  }
  @media (min-width: 320px) and (max-width: 620px) {
    left: 30%;
  }
`;

export const StacksH1Styled = styled.h1`
  color: #fff;
  padding: 0 5px;
  text-align: center;
  font-family: var(--font-secondary);
`;

export const ContainerStacksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-top: 5px;
`;
