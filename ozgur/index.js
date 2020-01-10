import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Hello from './src/pages/Hello';
import LoginPage from './src/pages/login-page/login-page';
import NewsPage from './src/pages/news-page';
import 'react-native-gesture-handler';

const AppNavigator = createStackNavigator(
  {
    Home: Hello,
    News: NewsPage,
    Login: LoginPage,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);

AppRegistry.registerComponent('ozgur', () => createAppContainer(AppNavigator));
