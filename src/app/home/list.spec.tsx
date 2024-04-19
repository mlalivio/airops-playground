import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleList from './SimpleList';

describe('SimpleList Component', () => {
  it('renders without crashing', () => {
    render(<SimpleList />);
    expect(screen.getByRole('heading', { name: /simple list/i })).toBeInTheDocument();
  });
  
  it('renders all the list items', () => {
    render(<SimpleList />);
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    expect(screen.getByText(/Orange/i)).toBeInTheDocument();
    expect(screen.getByText(/Grapes/i)).toBeInTheDocument();
  });
  
  it('renders the correct number of list items', () => {
    render(<SimpleList />);
    expect(screen.getAllByRole('listitem').length).toEqual(4);
  });
});
