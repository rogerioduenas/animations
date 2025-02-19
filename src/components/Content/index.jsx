import React from 'react';
import { Box } from '@mui/material';
import Card from '../Card';
import Animation1 from '../Animations/Animation-1';
import Animation2 from '../Animations/Animation-2';

const list = [
  { name: Animation1, cover: '1' },
  { name: Animation2, cover: '2' },
]

function Content() {
  return (
    <Box
      sx={{
        margin: '30px',
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
      {list.map((data, index) => (
        <Card
          key={index}
          animation={data.name}
          cover={data.cover} />
      ))}
    </Box>
  )
}

export default Content