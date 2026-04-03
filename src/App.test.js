// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevApiBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevApiBridge/i);
    expect(titleElement).toBeInTheDocument();
});
