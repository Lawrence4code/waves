import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './Components/Home';
import RegisterLogin from './Components/Register_login';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" component={RegisterLogin}> </Route>
        <Route path="/" exact component={Home}> </Route>
      </Switch>
    </Layout>

  )
}

export default Routes;