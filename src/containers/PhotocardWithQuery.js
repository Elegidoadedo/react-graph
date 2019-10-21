import React from 'react'
import { PhotoCard } from '../components/Photocard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  console.log(data)
  if (loading) return <img src='https://loading.io/spinners/rolling/index.curve-bars-loading-indicator.gif' />
  if (error) return {error}
  const { photo = {} } = data;
  return <PhotoCard {...photo} />}

export const PhotocardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables= {{ id}}>
    { renderProp }
  </Query>
)