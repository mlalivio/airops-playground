import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('initializes count at 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('increments count by 1', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('decrements count by 1', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');

    // Increment first to avoid going into negative for this demo
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });
});