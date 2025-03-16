import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button, a {
    &:focus, &:focus-visible {
      outline: none !important;
    }
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
  
  /* Corrigir o estilo do autocompletar (quando usado!) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
  }
  
  /* Sobrescrever estilos do Ant Design */
  .ant-form-item-explain-error {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.error};
  }
  
  .ant-btn-primary {
    &:focus, &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight} !important;
      border-color: transparent !important;
      outline: none !important;
    }
  }
  
  .ant-input:focus, .ant-input-focused,
  .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: 0 0 0 2px rgba(236, 103, 36, 0.2) !important;
  }
`;
