import styled from "styled-components";
import { Button, Input, Form } from "antd";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const WelcomeText = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const LoginForm = styled(Form)`
  width: 100%;
  max-width: 520px;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  .ant-form-item-explain-error {
    margin-top: 2px;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 14px;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledPasswordInput = styled(Input.Password)`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-input {
    height: 56px;
    font-size: 24px;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  border: none;

  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-color: transparent;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: transparent;
  }
`;
