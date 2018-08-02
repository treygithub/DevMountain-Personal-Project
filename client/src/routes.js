import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Component/Home/Home';
import Menu from './views/Component/Menu/Menu';
import About from './views/Component/About/About';
import Features from './views/Component/Features/Features';
import Register from './views/auth/register';
// import Admin from './admin/admin';
import Login from './views/auth/login';
import DashBoard from './views/Component/Dashboard/Dashboard';
import EditWebsite from './views/Component/Dashboard/EditWebsite/EditWebsite';
import EditMenu from './views/Component/Dashboard/EditMenu/EditMenu';

const Router2 = () =>  (
      
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/Menu' component={ Menu }/> 
          <Route path='/About' component={ About }/>
          <Route path='/Features' component={ Features }/>
          <Route path='/Register' component={ Register }/>
          <Route path='/Login' component={ Login }/>
          <Route path='/DashBoard' component={ DashBoard }/>
          <Route path='/EditWebsite' component={ EditWebsite }/>
          <Route path='/EditMenu' component={ EditMenu }/>

        </Switch>
      
);

export default Router2;