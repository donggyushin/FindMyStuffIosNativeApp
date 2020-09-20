import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Test3ScreenProps} from '../../navigations/PrivateNavigationTypes';
import {useFocusEffect} from '@react-navigation/native';

const Test3Component = ({navigation, route}: Test3ScreenProps) => {
  useFocusEffect(() => {
    navigation.dangerouslyGetParent()?.setOptions({
      tabBarVisible: false,
    });
    return () =>
      navigation.dangerouslyGetParent()?.setOptions({
        tabBarVisible: true,
      });
  });

  return (
    <SafeAreaView>
      <Text>Test3</Text>
    </SafeAreaView>
  );
};

export default Test3Component;
