import {config} from './app/config';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class WhiteLabelApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, this is {config.name}.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.color.primary,
  },
  text: {
    color: config.color.text,
  },
});

AppRegistry.registerComponent('WhiteLabelApp', () => WhiteLabelApp);
