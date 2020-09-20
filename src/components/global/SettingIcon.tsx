import {Image, TouchableOpacity} from 'react-native';

import React from 'react';

interface Props {
  openDrawerMenuBar: () => void;
}

const SettingIcon: React.FunctionComponent<Props> = ({openDrawerMenuBar}) => {
  return (
    <TouchableOpacity onPress={openDrawerMenuBar}>
      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={require('../../assets/settings.png')}
      />
    </TouchableOpacity>
  );
};

export default SettingIcon;
