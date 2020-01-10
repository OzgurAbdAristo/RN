import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  Button,
  Linking,
} from 'react-native';

class MainApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

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

  //36e314eb5f6c48e799fbb19adbc6133f
  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=36e314eb5f6c48e799fbb19adbc6133f',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      //   <View>
      //     <View style={{flex: 1}}>
      //       <Text>News</Text>
      //     </View>
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <Text
              style={{color: 'blue', backgroundColor: 'gray', marginBottom: 3}}
              onPress={() => Linking.openURL(item.url)}>
              {(item.author != null ? item.author : 'Untitled') + '\n'}{' '}
              {item.title + '\n'}
            </Text>
          )}
          // keyExtractor={({id}, index) => id}
          keyExtractor={item => item.url}
        />
      </View>
      //   </View>
    );
  }
}

export default MainApi;
