import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
    it('renders counter component correctly', () => {
        render(<Counter />);
        const counterElement = screen.getByText(/counter:/i);
        expect(counterElement).toBeInTheDocument();
    });

    it('increments counter value on increment button click', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/increment/i);
        fireEvent.click(incrementButton);
        expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
    });

    it('decrements counter value on decrement button click', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/decrement/i);
        fireEvent.click(decrementButton);
        expect(screen.getByText(/counter: -1/i)).toBeInTheDocument();
    });
});