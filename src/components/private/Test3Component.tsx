import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Test3ScreenProps} from '../../navigations/PrivateNavigationTypes';

const Test3Component = ({navigation, route}: Test3ScreenProps) => {
  return (
    <SafeAreaView>
      <Text>Test3</Text>
    </SafeAreaView>
  );
};

export default Test3Component;
