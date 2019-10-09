import React from 'react';
import { Anchor, Image } from './styles'

const DEFULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({cover = DEFULT_IMAGE, path, emoji = '?'}) => (
  <Anchor href={path} >
    <Image src={cover} />
    {emoji}
  </Anchor>
)