import React from 'react';
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import Context from './Context'
import { Logo } from './components/logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail} from './pages/Detail'
import { Favs} from './pages/Favs'
import { User} from './pages/User'
import { NotRegisteredUser} from './pages/NotRegisteredUser'


export const App = () => {

  return <div>
    <GlobalStyles />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
    </Router>
      <Context.Consumer >
        {({isAuth}) =>
          isAuth
            ? <Router>
                <Favs path='/favs' />
                <User path="/user" /> 
            </Router>
            : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
            </Router>
        }
      </Context.Consumer>
    <NavBar />
  </div>
}

