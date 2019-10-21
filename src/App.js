import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Context } from './Context'
import { Logo } from './components/logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail} from './pages/Detail'
import { Favs} from './pages/Favs'
import { User} from './pages/User'
import { NotRegisteredUser} from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'


export const App = () => {
  const { isAuth } = useContext(Context)
  return <div>
    <GlobalStyles />
    <Logo />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
      {!isAuth && <NotRegisteredUser path='/login' />}
      {!isAuth && <Redirect from='/favs' to='/login' noThrow/>}
      {!isAuth && <Redirect from='/user' to='/login' noThrow/>}
      {isAuth && <Redirect from='/login' to='/' noThrow/>}
      <Favs path='/favs' />
      <User path="/user" />
    </Router>
    <NavBar />
  </div>
}

