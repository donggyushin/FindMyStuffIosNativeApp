import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {MainScreenProps} from '../../navigations/PrivateNavigationTypes';
import React from 'react';

const MainComponent = ({navigation, route}: MainScreenProps) => {
  const openDrawerMenuBar = () => {
    navigation.openDrawer();
  };

  const goToTest3 = () => {
    navigation.navigate('Test3');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={openDrawerMenuBar}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require('../../assets/settings.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToTest3}>
        <Text>Main</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainComponent;
