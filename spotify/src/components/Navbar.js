/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import {Switch, Route} from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Search from './Navbar/Search';

export default function Navbar() {

    const searchRoute = useRouteMatch('/search' )
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation></Navigation>
      {searchRoute && <Search></Search>}
      {/* <Switch>
        <Route exact path='/'>
          Home
        </Route>
        <Route path='/Search'>
          Search
        </Route>
        <Route path='/Collection'>
          Collection
        </Route>
      </Switch> */}
      <Auth></Auth>
    </nav>
  )
}
