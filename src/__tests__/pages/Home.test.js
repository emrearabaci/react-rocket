import React from 'react';

// Dependencies
import { render, screen } from '@testing-library/react';

// Test Config
import '../../config/setupTests';

// Components
import Home from '../../components/pages/Home';

describe('Home.js / "./src/components/pages/Home.js"', () => {
  test('Is header text renders correctly?', () => {
    render(<Home />);
    const headerText = screen.getByTestId('home-header');
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent('Home');
  });
});
