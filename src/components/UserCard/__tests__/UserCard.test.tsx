import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import UserCard from '../index';
import { theme } from '../../../styles/theme';
import { vi } from 'vitest';

const mockUser = {
  id: '1',
  name: 'Test User',
  own_remuneration: 5000,
  user_companies: [{
    company_value: 100000,
    name: 'Test Company'
  }]
};

describe('UserCard', () => {
  const mockProps = {
    userId: mockUser.id,
    name: mockUser.name,
    ownRemuneration: mockUser.own_remuneration,
    companyValue: mockUser.user_companies[0].company_value,
    isSelected: false,
    onEdit: vi.fn(),
    onDelete: vi.fn(),
    onToggleSelect: vi.fn(),
  };

  it('should render user information correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard {...mockProps} />
      </ThemeProvider>
    );

    expect(screen.getByText(mockUser.name)).toBeTruthy();
    expect(screen.getByText('R$ 5.000,00')).toBeTruthy();
    expect(screen.getByText('R$ 100.000,00')).toBeTruthy();
  });

  it('should call onEdit when edit button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard {...mockProps} />
      </ThemeProvider>
    );

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    expect(mockProps.onEdit).toHaveBeenCalledWith(mockUser.id);
  });

  it('should call onDelete when delete button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard {...mockProps} />
      </ThemeProvider>
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(mockProps.onDelete).toHaveBeenCalledWith(mockUser.id);
  });

  it('should call onToggleSelect when select button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard {...mockProps} />
      </ThemeProvider>
    );

    const selectButton = screen.getByRole('button', { name: /plus/i });
    fireEvent.click(selectButton);
    expect(mockProps.onToggleSelect).toHaveBeenCalledWith(mockUser.id);
  });

  it('should show minus icon when selected', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard {...mockProps} isSelected={true} />
      </ThemeProvider>
    );
    const minusButton = screen.getByRole('button', { name: /minus/i });
    expect(minusButton).toBeTruthy();
  });
}); 