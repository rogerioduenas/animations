import React from 'react';
import styles from './style.module.scss';

function Animation1() {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <span></span>
        <div className={styles.box}>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Animation1