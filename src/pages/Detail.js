import React from 'react'
import { PhotocardWithQuery } from '../containers/PhotocardWithQuery'
import { Layout } from '../components/Layout'


export const Detail = ({ detailId }) => (
  <Layout title={`fotografía ${detailId}`}>
    <PhotocardWithQuery id={detailId} />
  </Layout>
)