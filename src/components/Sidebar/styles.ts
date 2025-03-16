import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  left: 0;
  width: ${({ theme }) => theme.sizes.sidebarWidth};
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.sidebar};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing.md};
  animation: ${slideIn} 0.3s ease-out forwards;

  &.closing {
    animation: ${slideOut} 0.3s ease-out forwards;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  left: 0;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(${({ theme }) => theme.effects.blur});
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn} 0.3s ease-out forwards;

  &.closing {
    animation: ${fadeOut} 0.3s ease-out forwards;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 101;
  padding: 0;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.effects.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
