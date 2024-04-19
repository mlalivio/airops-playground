import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('renders correctly with an initial count of 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  it('increments the count by 1 when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  });

  it('decrements the count by 1 when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter: -1/i)).toBeInTheDocument();
  });

  it('does not decrement below a minimum count if specified', () => {
    render(<Counter minCount={0} />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  it('does not increment beyond a maximum count if specified', () => {
    render(<Counter maxCount={1} />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  });

  it('resets to initial count when reset button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  it('increments and decrements the counter when the respective buttons are clicked in sequence', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });
});