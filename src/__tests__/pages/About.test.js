import React from 'react';

// Dependencies
import { render, screen } from '@testing-library/react';

// Test Config
import '../../config/setupTests';

// Components
import About from '../../components/pages/About';

describe('About.js / "./src/components/pages/About.js"', () => {
  test('Is header text renders correctly?', () => {
    render(<About />);
    const headerText = screen.getByTestId('about-header');
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent('About');
  });
});
