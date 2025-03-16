import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { authService } from "../../api/authService";
import { LoginCredentials } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  WelcomeText,
  LoginForm,
  StyledInput,
  StyledPasswordInput,
  LoginButton,
  FormItem
} from "./styles";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      setLoading(true);
      const token = await authService.login(values as LoginCredentials);
      login(token);
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <WelcomeText>Olá, seja bem-vindo!</WelcomeText>
      <LoginForm onFinish={handleLogin} autoComplete="off">
        <FormItem name="login" rules={[{ required: true, message: "Nome obrigatório" }]}>
          <StyledInput placeholder="Digite o seu nome" autoComplete="off" />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: "Senha obrigatória" }]}>
          <StyledPasswordInput placeholder="Digite a sua senha" autoComplete="new-password" />
        </FormItem>
        <LoginButton type="primary" htmlType="submit" loading={loading}>
          Entrar
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; 