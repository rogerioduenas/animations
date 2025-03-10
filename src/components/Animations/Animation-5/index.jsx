import React from 'react';
import styles from './style.module.scss';

function Animation1() {
  return (
    <div className={styles.body}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Animation1