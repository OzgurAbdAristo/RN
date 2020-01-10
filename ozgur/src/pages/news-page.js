import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {myWidth} from '../utils';
import NewsApi from '../common/news-api';
import TechNewsApi from '../common/techNews-api';
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
    };
  }

  onChangeHandler = value => {
    console.log(`Selected value: ${value}`);
    if (value === 'tech') {
    }
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: 'BiggPlus News Api',
      headerStyle: {
        backgroundColor: '#f32356',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
      },
    };
  };
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* <View
          style={{
            width: myWidth + 1,
            height: 25,
            paddingRight: 5,
            backgroundColor: 'red',
            alignItems: 'center',
            alignSelf: 'center',
          }}></View> */}
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          //   onValueChange={(itemValue, itemIndex) =>
          //     this.setState({language: itemValue})
          //   }>
          onValueChange={(itemValue, itemIndex) =>
            this.onChangeHandler(itemValue)
          }>
          <Picker.Item label="Business News" value="business" />
          <Picker.Item label="Tech News" value="tech" />
        </Picker>
        <NewsApi />
        <TechNewsApi />
      </View>
    );
  }
}
