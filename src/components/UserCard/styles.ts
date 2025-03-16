import styled from "styled-components";
import { Button } from "antd";

interface CardContainerProps {
  isSelected?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 285px;
  height: 138px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 2px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : "transparent"};
  transition: ${({ theme }) => theme.effects.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0;
  text-align: center;
`;

export const UserInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: center;

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 4px;
  height: auto;
  color: ${({ theme }) => theme.colors.textDark};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;

    .anticon {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .anticon {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &.ant-btn-dangerous {
    color: ${({ theme }) => theme.colors.error};

    &:hover {
      color: ${({ theme }) => theme.colors.error};
      opacity: 0.8;

      .anticon {
        color: ${({ theme }) => theme.colors.error};
      }
    }

    .anticon {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;
