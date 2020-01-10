import React from 'react';
import {View, Text, Button, AppRegistry} from 'react-native';
// import {Button} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

class Try extends React.Component {
  render() {
    return (
      <Text style={{fontWeight: 'bold'}}>
        I am bold
        <Text style={{color: 'red'}}>and red</Text>
      </Text>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home_Screen</Text>
        <Button
          title="Profile Git"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Profile')}>
          Profile Git
        </Button>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

// export default createAppContainer(AppNavigator);

AppRegistry.registerComponent('ozgur', () => createAppContainer(AppNavigator));
