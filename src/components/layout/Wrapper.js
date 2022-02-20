import React from 'react';

// Styles
import styles from '../../styles/layout/wrapper.module.scss';

// Components
import Navigation from './Navigation';
import Footer from './Footer';

function Wrapper(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Wrapper;
