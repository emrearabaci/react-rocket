import React from 'react';

// Dependencies
import { BrowserRouter } from 'react-router-dom';

// Styles
import './styles/app.scss';

// Components
import Wrapper from './components/layout/Wrapper';
import RouterLayout from './components/layout/RouterLayout';

function App() {
  document.title = 'React Rocket';
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <RouterLayout />
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
