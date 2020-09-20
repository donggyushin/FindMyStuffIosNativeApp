import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {MainScreenProps} from '../../navigations/PrivateNavigationTypes';
import React from 'react';
import SettingIcon from '../global/SettingIcon';

const MainComponent = ({navigation, route}: MainScreenProps) => {
  const openDrawerMenuBar = () => {
    navigation.openDrawer();
  };

  const goToTest3 = () => {
    navigation.navigate('Test3');
  };

  return (
    <SafeAreaView>
      <SettingIcon openDrawerMenuBar={openDrawerMenuBar} />
      <TouchableOpacity onPress={goToTest3}>
        <Text>Main</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainComponent;
