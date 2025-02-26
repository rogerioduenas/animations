import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './style.module.scss';

function Animation1() {
  return (
    <Box className={styles.body}>
      <Box className={styles.loader}>
        <svg viewBox='0 0 200 200'>
          <circle cx='100' cy='100' r='50'></circle>
        </svg>
      </Box>
    </Box>
  )
}

export default Animation1