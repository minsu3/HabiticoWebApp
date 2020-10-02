import React from 'react'
import { Route, Switch } from 'react-router-dom'
import List from '../components/todo/List'
import Home from '../components/home/Home'
import Login from '../components/signin/Login'
import About from '../components/about/About'
// import QuitInfo from '../components/QuitInfo'
import Quit from '../components/quit/Quit'
import Insert from '../components/quit/Insert'
import Focus from '../components/focus/Focus'

export default (
  <div>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/list" component={ List } />
      {/* <Route path='/list/:id' render={(props) => {
        return <HabitInfo id={props.match.params.id}/>
      }} /> */}
      <Route path="/quit" component={ Quit } />
      {/* <Route
        path="/quit/:id"
        render={(props) => {
          return <QuitInfo id={props.match.params.id} />;
        }}
      /> */}  
      <Route path="/insert" component={ Insert } />
      <Route path="/focus" component={ Focus } />
      <Route path="/about" component={ About } />
      <Route path="/login" component={ Login } />
    </Switch>
  </div>
);