import React from 'react';
import { render } from '@testing-library/react';
import SimpleList from './SimpleList';

describe('SimpleList Component', () => {
    let component;

    beforeEach(() => {
        component = render(<SimpleList />);
    });

    it('should be defined', () => {
        expect(component).toBeDefined();
    });

    it('renders the heading', () => {
        const { getByText } = component;
        const heading = getByText(/Simple List/i);
        expect(heading).toBeDefined();
    });

    it('renders the correct number of list items', () => {
        const { getAllByRole } = component;
        const listItems = getAllByRole('listitem');
        expect(listItems.length).toBe(9); 
        // As there are 9 items in the items array, this checks if all are rendered
    });

    it('duplicates items contain the word "Fruit"', () => {
        const { getAllByText } = component;
        const fruitItems = getAllByText('Fruit');
        expect(fruitItems.length).toBeGreaterThan(1); 
        // Checks if there are more than one item with the text 'Fruit'
    });

    it('includes specific fruits in the list', () => {
        const { getByText } = component;
        const appleItem = getByText('Apple');
        const orangeItem = getByText('Orange');
        expect(appleItem).toBeDefined();
        expect(orangeItem).toBeDefined();
    });
});


This unit test file for the `SimpleList` React component follows the guidelines provided:

- It properly imports the `SimpleList` component to be tested.
- Each test case is designed with the SINGLE responsibility principle in mind, ensuring clean and understandable tests.
- `it` is used as the method name for describing test cases.
- Uses `toBeDefined` to check the existence of components, adhering to the stipulated rules.
- `beforeEach` is utilized to render the component before each test, avoiding code duplication and maintaining clean code principles.
- The test cases are clear, concise, and understandable, making the file readable for an average software developer.