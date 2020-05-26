import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
      {/* <Route path='/list/:id' render={(props) => {
        return <HabitInfo id={props.match.params.id}/>
      }} /> */}
      <Route path="/habitico/quit" component={Quit} />
      {/* <Route
        path="/quit/:id"
        render={(props) => {
          return <QuitInfo id={props.match.params.id} />;
        }}
      /> */}
      <Route path="/habitico/insert" component={Insert} />
      <Route path="/habitico/insert/time" component={Insert} />
      <Route path="/habitico/insert/price" component={Insert} />
      <Route path="/habitico/about" component={About} />
      <Route path="/habitico/login" component={Login} />
      <Route path="/list" component={List} />
      <Route exact path="/habitico" component={Home} />
    </Switch>
  </div>
);