import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../index';
import { theme } from '../../../styles/theme';
import { vi } from 'vitest';

describe('NavBar', () => {
  const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    
    return render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  it('should render all navigation items', () => {
    renderWithRouter(<NavBar activePath="/clients" />);
    
    // Check that all nav items are rendered
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Clientes')).toBeTruthy();
    expect(screen.getByText('Produtos')).toBeTruthy();
  });


  it('should call onNavClick when a non-active item is clicked', () => {
    const mockOnNavClick = vi.fn();
    renderWithRouter(<NavBar activePath="/clients" onNavClick={mockOnNavClick} />);
    
    // Click on a non-active item (Home)
    fireEvent.click(screen.getByText('Home'));
    expect(mockOnNavClick).toHaveBeenCalledTimes(1);
    
    // Click on the active item (Clients) - should not trigger callback
    fireEvent.click(screen.getByText('Clientes'));
    expect(mockOnNavClick).toHaveBeenCalledTimes(1); // Still just one call
  });
}); 