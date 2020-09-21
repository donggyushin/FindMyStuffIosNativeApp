import MainComponent from '../components/private/MainComponent';
import {PrivateNavigationParamList} from './PrivateNavigationTypes';
import React from 'react';
import Test2Component from '../components/private/Test2Component';
import Test3Component from '../components/private/Test3Component';
import TestComponent from '../components/private/TestComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator<PrivateNavigationParamList>();
const Tab = createBottomTabNavigator<PrivateNavigationParamList>();
const Stack = createStackNavigator<PrivateNavigationParamList>();

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={TabNavigation} />
    <Stack.Screen name="Test3" component={Test3Component} />
  </Stack.Navigator>
);

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={MainComponent} />
    <Tab.Screen name="Test2" component={Test2Component} />
  </Tab.Navigator>
);

const PrivateNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tab" component={MainStackNavigation} />
    <Drawer.Screen name="Test" component={TestComponent} />
  </Drawer.Navigator>
);

export default PrivateNavigation;
