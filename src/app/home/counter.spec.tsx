import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders the counter component', () => {
    const counterText = screen.getByText(/counter:/i);
    expect(counterText).toBeDefined();
  });

  describe('Increment functionality', () => {
    it('increments counter value when increment button is clicked', () => {
      fireEvent.click(screen.getByText(/increment/i));
      const incrementedValue = screen.getByText(/counter: 1/i);
      expect(incrementedValue).toBeDefined();
    });
  });

  describe('Decrement functionality', () => {
    it('decrements counter value when decrement button is clicked', () => {
      // Initial increment to avoid decrementing from 0
      fireEvent.click(screen.getByText(/increment/i));
      fireEvent.click(screen.getByText(/decrement/i));
      const decrementedValue = screen.getByText(/counter: 0/i);
      expect(decrementedValue).toBeDefined();
    });
  });
});
