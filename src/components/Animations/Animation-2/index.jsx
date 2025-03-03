import React from 'react'
import { Box, Typography } from '@mui/material';
import styles from './style.module.scss';

function Animation2() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p>Do you like this ?</p>
        <label>
          <input type='radio' name='btn' />
          <span className={styles.check}></span>
          Yes
        </label>
        <label>
          <input type='radio' name='btn' />
          <span className={styles.cross}></span>
          No
        </label>
      </div>
    </div>
  )
}

export default Animation2