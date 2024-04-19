import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleList from './SimpleList';

describe('SimpleList component', () => {
  test('renders Simple List as a text', () => {
    render(<SimpleList />);
    const headingElement = screen.getByText(/simple list/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all list items', () => {
    render(<SimpleList />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  test('specific item is in the document', () => {
    render(<SimpleList />);
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Orange')).toBeInTheDocument();
    expect(screen.getByText('Grapes')).toBeInTheDocument();
  });
});