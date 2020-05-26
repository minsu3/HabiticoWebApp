import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import List from '../List'
import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
import QuitInfo from '../components/QuitInfo'
import Quit from '../components/Quit'
import Insert from '../components/Insert'


export default (
  <div>
    <Switch>
      <Route path="/list" component={List} />
      {/* <Route path='/list/:id' render={(props) => {
        return <HabitInfo id={props.match.params.id}/>
      }} /> */}
      <Route path="/quit" component={Quit} />
      {/* <Route
        path="/quit/:id"
        render={(props) => {
          return <QuitInfo id={props.match.params.id} />;
        }}
      /> */}
      <Route path="/insert" component={Insert} />
      <Route path="/insert/time" component={Insert} />
      <Route path="/insert/price" component={Insert} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);