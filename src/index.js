import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import SearchPage from './pages/SearchPage';
import EditUser from './pages/EditUser';

const Routes = createAppContainer(
  createStackNavigator({
    Home: SearchPage,
    Login: Login,
    Cadastro: CreateUser,
    Edit: EditUser
  })
);

export default Routes;