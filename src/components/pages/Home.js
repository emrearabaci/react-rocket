import React from 'react';

// Styles
import styles from '../../styles/pages/home.module.scss';

function Home() {
  return (
    <div className={styles.structure}>
      <h2 data-testid={'home-header'}>Home</h2>
    </div>
  );
}

export default Home;
