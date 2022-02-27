import React from 'react';

// Dependencies
import { render, screen } from '@testing-library/react';

// Test Config
import '../config/setupTests';

// Components
import App from '../App';

describe('App.js / "./src/App.js"', () => {
  test('Document Title (Window Title) renders correctly?', () => {
    render(<App />);
    expect(global.window.document.title).toBe('React Rocket');
  });
});
