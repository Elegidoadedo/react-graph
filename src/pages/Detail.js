import React from 'react'
import { PhotocardWithQuery } from '../containers/PhotocardWithQuery'


export const Detail = ({ detailId }) => (
  <PhotocardWithQuery id={detailId} />
)