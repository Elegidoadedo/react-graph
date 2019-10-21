import React from 'react'
import { ListOfPhotocards } from '../containers/listOfPhotocards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

export const Home = ({id}) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales muy guays!'>
      <ListOfCategories />
      <ListOfPhotocards categoryId={id}/>
    </Layout>
  )
}
