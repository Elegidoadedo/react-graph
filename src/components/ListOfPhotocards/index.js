import React from 'react'
import { Photocard } from '../Photocard'

 export const ListOfPhotocardsComponent = ({data: {photos = []}} = {}) => {
  return (
    <ul>
      {
        photos.map( photo => <Photocard key={photo.id} {...photo} />)
      }
    </ul>
  )
}

