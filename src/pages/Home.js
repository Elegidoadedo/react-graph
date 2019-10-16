import React from 'react'
import { ListOfPhotocards } from '../containers/listOfPhotocards'
import { ListOfCategories } from '../components/ListOfCategories'


export const Home = ({id}) => {
  return <>
  <ListOfCategories />
  <ListOfPhotocards categoryId={id}/>
</>
}
