import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';

export type PrivateNavigationParamList = {
  Main: undefined;
  Test: undefined;
  Test2: undefined;
  Test3: undefined;
  Tab: undefined;
  Stack: undefined;
};

type MainScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PrivateNavigationParamList, 'Main'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<PrivateNavigationParamList>,
    DrawerNavigationProp<PrivateNavigationParamList>
  >
>;
type MainScreenRouteProp = RouteProp<PrivateNavigationParamList, 'Main'>;

export type MainScreenProps = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

type Test3ScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PrivateNavigationParamList, 'Test3'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<PrivateNavigationParamList>,
    DrawerNavigationProp<PrivateNavigationParamList>
  >
>;

type Test3RouteNavigationProp = RouteProp<PrivateNavigationParamList, 'Test3'>;

export type Test3ScreenProps = {
  navigation: Test3ScreenNavigationProp;
  route: Test3RouteNavigationProp;
};
