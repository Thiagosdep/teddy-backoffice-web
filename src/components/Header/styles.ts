import styled from "styled-components";
import { Button } from "antd";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  height: ${({ theme }) => theme.sizes.headerHeight};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.img`
  height: ${({ theme }) => theme.sizes.logoHeight};
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.sizes.iconSize.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDark};
  transition: ${({ theme }) => theme.effects.transition};
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const UserName = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 8px;
  height: auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textDark};
  transition: ${({ theme }) => theme.effects.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
    background: transparent !important;
    border-color: transparent !important;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary} !important;
    background: transparent !important;
    border-color: transparent !important;
  }

  .anticon {
    color: inherit;
  }
`;
