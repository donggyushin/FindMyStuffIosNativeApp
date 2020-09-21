import {PublicNavigationParamList} from './PublicNavigationTypes';
import React from 'react';
import SignInComponent from '../components/public/SignInComponent';
import SignUpComponent from '../components/public/SignUpComponent';
import {createStackNavigator} from '@react-navigation/stack';

const PublicStack = createStackNavigator<PublicNavigationParamList>();

const PublicNavigation = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name="SignIn"
        options={{
          headerShown: false,
          title: '로그인',
        }}
        component={SignInComponent}
      />
      <PublicStack.Screen
        options={{
          title: '계정 만들기',
        }}
        name="SignUp"
        component={SignUpComponent}
      />
    </PublicStack.Navigator>
  );
};

export default PublicNavigation;
