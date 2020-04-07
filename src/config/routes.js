import React from 'react'
import { Route, Switch } from 'react-router-dom'
import List from '../List'
import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
import HabitInfo from '../components/HabitInfo'
import Quit from '../components/Quit'


export default (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/habitico-fe' component={ Home } />
      <Route exact path='/list' component={ List } />
      <Route path='/list/:id' render={(props) => {
        return <HabitInfo id={props.match.params.id}/>
      }} />
      <Route exact path='/quitthat' component={ Quit } />
      <Route path='/about' component={ About } />
      <Route path='/login' component={ Login } />
    </Switch>
  </div>
)