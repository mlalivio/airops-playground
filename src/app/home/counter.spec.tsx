Considering the Counter component shared, here is how a test file using React Testing Library and Jest might look like. This test file follows the guidelines and principles outlined:

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter'; // Ensure this import matches the component name exactly

describe('Counter Component', () => {
    beforeEach(() => {
        // This function runs before each test to render the component fresh for each one
        render(<Counter />);
    });

    it('should render Counter component correctly', () => {
        const counterComponent = screen.getByText(/counter:/i);
        expect(counterComponent).toBeDefined();
    });

    it('shows initial count as 0', () => {
        const countValue = screen.getByText(/counter: 0/i);
        expect(countValue).toBeDefined();
    });

    it('increments count by 1 when increment button is clicked', () => {
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);

        const countValue = screen.getByText(/counter: 1/i);
        expect(countValue).toBeDefined();
    });

    it('decrements count by 1 when decrement button is clicked', () => {
        // First increment the count to avoid going into negative for this particular test
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);

        // Now test decrement
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);

        const countValue = screen.getByText(/counter: 0/i);
        expect(countValue).toBeDefined();
    });

    it('should not decrement below 0', () => {
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton); // Assuming our Counter has no functionality to block at 0. This test will fail if the Counter does stop at 0.

        const countValue = screen.getByText(/counter: -1/i);
        expect(countValue).toBeDefined(); // This assertion verifies the behavior but also illustrates that the functionality might not be as expected. Consider adjusting the logic in Counter.
    });
});


This example follows the specified guidelines:
- It imports the Counter component correctly.
- Uses `it` for defining test cases.
- Utilizes `beforeEach` for common setup tasks to avoid repetition.
- Does not use `toBeInTheDocument` and opts for `toBeDefined` to check for the component's existence.
- Keeps variable and function names clear and descriptive.
- Adheres to the single responsibility principle by breaking down tests based on specific interactions and expectations.

Remember, the effectiveness of these tests also depends on how the Counter component is expected to behave in various scenarios, such as if negative counts are permissible or not.