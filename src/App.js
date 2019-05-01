import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './Components/Dashbord/Index'
import Navbar from './Components/Navbar'
import Forces from './Components/Forces'
import Crime from './Components/CrimeCategory'

function App() {
  return (
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/Forces' component={Forces} />
      <Route path='/Crime-Categories' component={Crime} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
