import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
import List from '../List'


export default (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/home' component={ Home } />
      <Route path='/todo' component={ List } />
      <Route path='/login' component={ Login } />
      <Route path='/about' component={ About } />
    </Switch>
  </div>
)