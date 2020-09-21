import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type PublicNavigationParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<
  PublicNavigationParamList,
  'SignIn'
>;
type SignInScreenRouteProp = RouteProp<PublicNavigationParamList, 'SignIn'>;
export type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
  route: SignInScreenRouteProp;
};
