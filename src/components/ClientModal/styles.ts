import styled from "styled-components";
import { Button } from "antd";

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ModalButton = styled(Button)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.buttonHeight.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &.ant-btn-primary:not(.ant-btn-dangerous) {
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

export const DeleteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
