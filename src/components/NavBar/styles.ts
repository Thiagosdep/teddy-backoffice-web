import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

interface NavItemProps {
  active: string;
}

export const NavItem = styled(Link)<NavItemProps>`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.buttonHeight.sm};
  padding-left: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${(props) =>
    props.active === "true"
      ? props.theme.colors.secondary
      : props.theme.colors.textDark};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeight.none};
  letter-spacing: ${({ theme }) => theme.letterSpacing.none};
  transition: ${({ theme }) => theme.effects.transition};

  &:hover {
    background-color: ${(props) =>
      props.active === "true"
        ? "transparent"
        : props.theme.colors.secondaryLight};
    color: ${(props) =>
      props.active === "true"
        ? props.theme.colors.secondary
        : props.theme.colors.textDark};
  }

  svg {
    margin-right: ${({ theme }) => theme.sizes.navItemIconMargin};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const NavText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeight.none};
  letter-spacing: ${({ theme }) => theme.letterSpacing.none};
`;
