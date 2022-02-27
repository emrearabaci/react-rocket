import React from 'react';

// Dependencies
import { Link } from 'react-router-dom';

// Styles
import styles from '../../styles/layout/navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.structure}>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
    </div>
  );
}

export default Navigation;
