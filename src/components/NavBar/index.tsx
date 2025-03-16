import React from "react";
import { NavBarContainer, NavItem, NavText } from "./styles"
import { HomeOutlined, UserOutlined, AppstoreOutlined } from "@ant-design/icons";

interface NavBarProps {
  activePath: string;
  onNavClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ activePath, onNavClick }) => {
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path !== activePath) {
      e.preventDefault();
      if (onNavClick) onNavClick();
    }
  };

  return (
    <NavBarContainer>
      <NavItem to="/" active={activePath === "/" ? "true" : "false"} onClick={(e) => handleNavClick(e, "/")}>
        <HomeOutlined />
        <NavText>Home</NavText>
      </NavItem>
      
      <NavItem to="/clients" active={activePath === "/clients" ? "true" : "false"}>
        <UserOutlined />
        <NavText>Clientes</NavText>
      </NavItem>
      
      <NavItem to="/products" active={activePath === "/products" ? "true" : "false"} onClick={(e) => handleNavClick(e, "/products")}>
        <AppstoreOutlined />
        <NavText>Produtos</NavText>
      </NavItem>
    </NavBarContainer>
  );
};

export default NavBar; 