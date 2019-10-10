import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { GoHeart } from "react-icons/go";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const Photocard = ({id, likes = 0, src = DEFAULT_IMAGE})=>(
  <article>
    <a href={`/detail/${id}`} >
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
    </a>
    <Button>
      <GoHeart size='32px'/> {likes} likes!
    </Button>
  </article>
)