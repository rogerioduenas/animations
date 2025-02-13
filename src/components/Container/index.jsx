import React from 'react'
import { Box } from '@mui/material';
import Header from '../Header';
import Content from '../Content';

function Container() {
  return (
    <Box sx={{
      position: 'relative',
    }}>
      <Header />
      <Content/>
    </Box>
  )
}

export default Container