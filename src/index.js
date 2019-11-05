import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    CreateUser
  })
);

export default Routes;