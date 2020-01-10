import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as changeCount from './src/actions/counts';

class App extends Component {
  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }
  resetCount() {
    let {count, actions} = this.props;
    count = 0;
    actions.resetCount(count);
  }
  render() {
    const {count} = this.props;
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
        <Button title="reset" onPress={() => this.resetCount()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

const mapStateToProps = state => ({
  count: state.count.count,
});
const ActionCreators = Object.assign({}, changeCount);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
