import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {COLORS} from '../../constants/Constants';
import React from 'react';
import {SignInScreenProps} from '../../navigations/PublicNavigationTypes';

const SignInComponent = ({navigation, route}: SignInScreenProps) => {
  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          <View style={[styles.iconContainer]}>
            <Text>Some Image Will Be Here</Text>
          </View>
          <View style={styles.textInputContainer}>
            <View style={[styles.row]}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons8-user-male-96.png')}
              />
              <TextInput
                autoCompleteType={'off'}
                style={styles.textInput}
                placeholder={'아이디를 입력해주세요 :)'}
              />
              <View style={styles.underLine} />
            </View>
            <View style={[styles.row]}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons8-eye-96.png')}
              />
              <TextInput
                style={styles.textInput}
                autoCompleteType={'off'}
                secureTextEntry={true}
                placeholder={'비밀번호를 입력해주세요 :)'}
              />
              <View style={styles.underLine} />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.notYetAccountContainer, {marginTop: 10}]}>
                <Text style={styles.notYetAccountText}>
                  계정이 기억이 나지 않을때
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={goToSignUpScreen}>
            <View style={styles.notYetAccountContainer}>
              <Text style={styles.notYetAccountText}>
                아직 계정이 없으신가요?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  underLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.gray,
    position: 'absolute',
    bottom: 0,
  },
  textInput: {
    fontSize: 16,
    width: '90%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: 55,
    borderRadius: 4,
    backgroundColor: COLORS.facebookBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  notYetAccountContainer: {
    borderBottomColor: COLORS.facebookBlue,
    borderBottomWidth: 1,
  },
  notYetAccountText: {
    color: COLORS.facebookBlue,
  },
});

export default SignInComponent;
