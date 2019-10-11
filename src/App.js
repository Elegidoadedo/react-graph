import React from 'react';
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotocards } from './containers/listOfPhotocards'
import { Logo } from './components/logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotocards categoryId='2'/>
  </>
);
