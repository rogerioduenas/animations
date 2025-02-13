import React from 'react'
import Card from '../Card';
import Animation1 from '../Animations/Animation-1';
import Animation2 from '../Animations/Animation-2';

const list = [
  { name: Animation1, cover: 'https' },
  { name: Animation2, cover: 'https' },
]
function Content() {
  return (
      list.map((data, key) => (
        <Card animation={data.name}/>
      ))
  )
}

export default Content