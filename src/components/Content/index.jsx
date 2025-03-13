import React from 'react';
import { Box } from '@mui/material';
import Card from '../Card';
import Animation1 from '../Animations/Animation-1';
import Animation2 from '../Animations/Animation-2';
import Animation3 from '../Animations/Animation-3';
import Animation4 from '../Animations/Animation-4';
import Animation5 from '../Animations/Animation-5';
import Animation6 from '../Animations/Animation-6';
import Animation7 from '../Animations/Animation-7';
import Animation8 from '../Animations/Animation-8';

const list = [
  { name: Animation1, cover: '1' },
  { name: Animation2, cover: '2' },
  { name: Animation3, cover: '3' },
  { name: Animation4, cover: '4' },
  { name: Animation5, cover: '5' },
  { name: Animation6, cover: '6' },
  { name: Animation7, cover: '7' },
  { name: Animation8, cover: '8' },
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