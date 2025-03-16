import React from "react";
import { SidebarContainer, SidebarOverlay, BackButton } from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import NavBar from "../NavBar";

interface SidebarProps {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  activePath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isClosing, onClose, activePath }) => {
  if (!isOpen && !isClosing) return null;

  return (
    <>
      <SidebarContainer className={isClosing ? "closing" : ""}>
        <BackButton onClick={onClose}>
            <CloseOutlined />
        </BackButton>
        
        <NavBar activePath={activePath} onNavClick={onClose} />
      </SidebarContainer>
      <SidebarOverlay className={isClosing ? "closing" : ""} onClick={onClose} />
    </>
  );
};

export default Sidebar; 