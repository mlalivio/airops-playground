```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('renders button correctly with children', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('executes onClick function when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is passed', () => {
        const { getByText } = render(<Button disabled>Click me</Button>);
        expect(getByText('Click me')).toBeDisabled();
    });
});
```