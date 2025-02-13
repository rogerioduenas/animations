import React from 'react'
import { Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box sx={{
      background: '#149eca',
      color: 'white',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography>Animations</Typography>
    </Box>
  )
}

export default Header