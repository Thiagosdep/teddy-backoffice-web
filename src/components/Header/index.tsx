import React, { useContext, useRef, useEffect, useState } from 'react';
import { LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/AuthContext';
import { 
  HeaderContainer, 
  Logo,
  MenuButton,
  HeaderContent,
  UserSection,
  UserName,
  LogoutButton
} from './styles';
import Sidebar from '../Sidebar';

interface HeaderProps {
  activePath: string;
}

const Header: React.FC<HeaderProps> = ({ activePath }) => {
  const { user, logout } = useContext(AuthContext);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const firstName = user?.username?.split(' ')[0] || '';

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setIsClosing(true);
      
      timeoutRef.current = setTimeout(() => {
        setSidebarOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setSidebarOpen(true);
    }
  };

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleSidebar}>
          <MenuOutlined />
        </MenuButton>
        <HeaderContent>
          <Logo src={'./teddy-open-finance.png'} alt="Teddy Open Finance" />
        </HeaderContent>
        <UserSection>
          <UserName>Olá, {firstName}!</UserName>
          <LogoutButton onClick={logout}>
            <LogoutOutlined />
          </LogoutButton>
        </UserSection>
      </HeaderContainer>
      <Sidebar 
        isOpen={sidebarOpen} 
        isClosing={isClosing} 
        onClose={toggleSidebar}  
        activePath={activePath}
      />
    </>
  );
};

export default Header;