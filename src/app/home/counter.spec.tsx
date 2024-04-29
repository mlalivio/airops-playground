import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
    let getByText;
    
    beforeEach(() => {
        ({ getByText } = render(<Counter />));
    });

    it('should render the Counter component', () => {
        const counterComponent = render(<Counter />);
        expect(counterComponent).toBeDefined();
    });

    it('should display the initial count', () => {
        const countElement = getByText('Counter: 0');
        expect(countElement).toBeDefined();
    });

    it('should increment count on Increment button click', () => {
        const incrementButton = getByText('Increment');
        fireEvent.click(incrementButton);
        const countElement = getByText('Counter: 1');
        expect(countElement).toBeDefined();
    });

    it('should decrement count on Decrement button click', () => {
        // Incrementing first to avoid negative count for this case
        const incrementButton = getByText('Increment');
        fireEvent.click(incrementButton);

        const decrementButton = getByText('Decrement');
        fireEvent.click(decrementButton);
        const countElement = getByText('Counter: 0');
        expect(countElement).toBeDefined();
    });

    it('should not decrement below 0', () => {
        const decrementButton = getByText('Decrement');
        fireEvent.click(decrementButton);
        const countElement = getByText('Counter: 0');
        expect(countElement).toBeDefined();
    });
});
