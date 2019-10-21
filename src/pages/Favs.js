import React from 'react';
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return <Layout title='Tus favoritos' subtitle='aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
}