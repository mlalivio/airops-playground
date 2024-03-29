import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('initial count is 0', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Counter: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments count by 1 when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Counter: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('decrements count by 1 when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Counter: -1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments and decrements count correctly with multiple clicks', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Simulate 3 increments and 2 decrements
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const countElement = screen.getByText(/Counter: 1/i);
    expect(countElement).toBeInTheDocument();
  });
});