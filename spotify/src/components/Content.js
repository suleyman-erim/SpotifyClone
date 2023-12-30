/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Navbar from 'components/Navbar';



import Home from 'views/Home';
import Search from 'views/Search';
import Collection from 'views/Collection';




export default function Content() {

  return (
    <main className=' flex-auto overflow-auto'>
      <Navbar></Navbar>
      <div className=' px-8 py-5'>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/Search'>
          <Search></Search>
        </Route>
        <Route path='/Collection'>
          <Collection></Collection>
        </Route>
      </Switch>
      </div>

    </main>
  )
}
