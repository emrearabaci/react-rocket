import React from 'react';

// Dependencies
import { Routes, Route } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import About from '../pages/About';

function RouterLayout() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </div>
  );
}

export default RouterLayout;
