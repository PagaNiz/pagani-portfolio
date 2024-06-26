import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #171717;
  display: flex;
  justify-content: center;
`;

export const ContainerAnchorStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  align-items: center;
`;

export const LogoSocialFooterStyled = styled.svg`
  fill: #fff;
  &:hover {
    fill: var(--pink);
  }
`;

export const ParagraphFooterStyled = styled.p`
  font-weight: 500;
  font-family: var(--font-secondary);
  text-align: center;
  margin-bottom: 0;
`;
