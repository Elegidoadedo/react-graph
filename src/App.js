import React from 'react';
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotocards } from './containers/listOfPhotocards'
import { PhotocardWithQuery } from './containers/PhotocardWithQuery'
import { Logo } from './components/logo'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return <div>
    <GlobalStyles />
    <Logo />
    {
      detailId
      ? <PhotocardWithQuery id={detailId} />
      : <Home />
    }
  </div>
}

