import React from 'react';
import { Link, Image } from './styles'

const DEFULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({cover = DEFULT_IMAGE, path='#', emoji = '?'}) => (
  <Link to={path} >
    <Image src={cover} />
    {emoji}
  </Link>
)