import { render, screen } from '@testing-library/react';
import Button from '../app/_components/button/button';

test('renders the button with the correct label', () => {
  render(<Button label="Click Me" />);
  // Check if the button is rendered with the correct label
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeDefined();
});