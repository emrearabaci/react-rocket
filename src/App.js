import React from 'react';

// Styles
import './styles/app.scss';

// Components
import Wrapper from './components/layout/Wrapper';

function App() {
  document.title = 'React Rocket';
  return (
    <div>
      <Wrapper>
        <div className="greetings">
          <h2 data-testid="header">react rocket</h2>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
