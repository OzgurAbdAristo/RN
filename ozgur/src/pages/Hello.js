import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LogoHP from '../pages/login-page/Logo';
import Post_Api from '../common/post-api';

function _onClick() {
  // Post_Api.post_api().then(response => this.setState({data: response}));
  console.log(this.state.data);
}

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'asdsa'};
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'BiggPlus',
      headerStyle: {
        backgroundColor: '#f32356',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
      },
      headerLeft: (
        <TouchableOpacity
          style={{fontSize: 20, color: 'black', marginLeft: 5, padding: 5}}
          styleDisabled={{color: 'red'}}
          onPress={() => navigation.navigate('News')}>
          <Text>News</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={{fontSize: 20, color: 'black', marginRight: 5, padding: 5}}
          styleDisabled={{color: 'red'}}
          // onPress={() => alert('Login')}
        >
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LogoHP />
        <Text>Welcome to Bigg Plus</Text>
        {/* <Text>{Post_Api.post_api}</Text> */}
      </View>
    );
  }
}
