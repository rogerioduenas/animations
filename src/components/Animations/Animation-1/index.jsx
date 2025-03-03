import React from 'react';
import styles from './style.module.scss';

function Animation1() {
  return (
    <div className={styles.body}>
      <div className={styles.loader}>
        <svg viewBox='0 0 200 200'>
          <circle cx='100' cy='100' r='50'></circle>
        </svg>
      </div>
    </div>
  )
}

export default Animation1