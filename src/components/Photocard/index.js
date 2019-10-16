import React from 'react'
import { Article,ImgWrapper, Img, Button } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/userNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const Photocard = ({id, likes = 0, src = DEFAULT_IMAGE})=>{
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show && <>
            <a href={`/?detail=${id}`} >
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: {id}
                  }})
                  setLiked(!liked)
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                }
              }
            </ToggleLikeMutation>
          </>
      }

    </Article>
  )
}