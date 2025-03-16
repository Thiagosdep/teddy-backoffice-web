import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ClientModal from '../index';
import { theme } from '../../../styles/theme';
import { vi } from 'vitest';

const mockUser = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  own_remuneration: 5000,
  user_companies: [{
    id: 'company1',
    name: 'Test Company',
    company_value: 100000,
    active: true
  }]
};

describe('ClientModal', () => {
  const mockProps = {
    visible: true,
    onCancel: vi.fn(),
    onSubmit: vi.fn(),
    loading: false,
    userData: mockUser,
  };

  it('should render create modal correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ClientModal {...mockProps} type="create" />
      </ThemeProvider>
    );

    // Use getByRole to find the heading
    expect(screen.getByRole('heading', { name: /criar cliente/i })).toBeInTheDocument();
    
    // Check for form fields using more specific selectors
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Remuneração')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome da Empresa')).toBeInTheDocument();
    expect(screen.getByLabelText('Valor da Empresa')).toBeInTheDocument();
    
    // Check for the submit button
    expect(screen.getByRole('button', { name: /criar cliente/i })).toBeInTheDocument();
  });

  it('should render edit modal correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ClientModal {...mockProps} type="edit" />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /editar cliente/i })).toBeInTheDocument();
    
    // Check for the submit button
    expect(screen.getByRole('button', { name: /salvar alterações/i })).toBeInTheDocument();
  });

  it('should render delete modal correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ClientModal {...mockProps} type="delete" />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /excluir cliente/i })).toBeInTheDocument();
    expect(screen.getByText(/você está prestes a excluir o cliente/i)).toBeInTheDocument();
    expect(screen.getByText('Test User', { selector: 'strong' })).toBeInTheDocument();
    
    // Check for the delete button
    expect(screen.getByRole('button', { name: /excluir cliente/i })).toBeInTheDocument();
  });

  it('should call onSubmit with form data when create form is submitted', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ClientModal {...mockProps} type="create" />
      </ThemeProvider>
    );

    // Fill the form using more specific selectors
    // Use the exact label text and testId to avoid ambiguity
    fireEvent.change(screen.getByLabelText('Nome'), { 
      target: { value: 'New User' } 
    });
    
    fireEvent.change(screen.getByLabelText('Email'), { 
      target: { value: 'new@example.com' } 
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /criar cliente/i }));

    await waitFor(() => {
      expect(mockProps.onSubmit).toHaveBeenCalled();
    });
  });

  it('should call onCancel when modal is closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <ClientModal {...mockProps} type="create" />
      </ThemeProvider>
    );

    // Find and click the close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockProps.onCancel).toHaveBeenCalled();
  });
}); 