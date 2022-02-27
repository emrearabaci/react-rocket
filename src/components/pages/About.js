import React from 'react';

// Styles
import styles from '../../styles/pages/about.module.scss';

function About() {
  return (
    <div className={styles.structure}>
      <h2 data-testid={'about-header'}>About</h2>
    </div>
  );
}

export default About;
