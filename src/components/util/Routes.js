import React, {Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Landing from '../../views/Landing';
import PopularSpaces from '../../views/popular/PopularSpaces';
import LogIn from '../../forms/LogIn';
import SignUp from '../../forms/SignUp';
import Me from '../../views/Me';
import LogOut from '../../views/util/LogOut';
import PopularUsers from '../../views/popular/PopularUsers';
import Space from '../../views/Space';
import About from '../../views/About';
import VerifyEmail from '../../views/VerifyEmail';

class Routes extends Component {
render(){
return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" render={() => (
      <Redirect to="/landing"/>
    )}/>
    <Route path="/about" component={About}/>
    <Route path="/landing" component={Landing}/>
    <Route path="/popular/spaces" component={PopularSpaces}/>
    <Route path="/popular/users" component={PopularUsers}/>
    <Route path="/login" component={LogIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/logout" component={LogOut}/>
    <Route path="/me" component={Me} />
    <Route path="/space" component={Space} />
    <Route path="/verifyemail/:id" component={VerifyEmail} />
  </Switch>
  </BrowserRouter>
);
}
};

export default Routes;
