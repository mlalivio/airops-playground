import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('renders the counter component with initial count of 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  it('increments the counter by 1 when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  it('decrements the counter by 1 when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/counter: -1/i);
    expect(counterElement).toBeInTheDocument();
  });

  it('increments and then decrements the counter when the respective buttons are clicked in sequence', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    let counterElement = screen.getByText(/counter: 1/i);
    expect(counterElement).toBeInTheDocument();

    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    counterElement = screen.getByText(/counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });
});