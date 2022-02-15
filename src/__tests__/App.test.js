import React from 'react';
import { render, screen } from '@testing-library/react';

// Test Config
import '../config/setupTests';

// Components
import App from '../App';

describe('App.js', () => {
  test('Header text renders correctly', () => {
    render(<App />);
    const textEl = screen.getByTestId('header');
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveTextContent('react rocket');
  });
});
