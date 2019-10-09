import React from 'react';
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotocards } from './components/ListOfPhotocards'
import { Logo } from './components/logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotocards />
  </>
);
