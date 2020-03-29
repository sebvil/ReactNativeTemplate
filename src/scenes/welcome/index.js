import React, {Component} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import styles from '_scenes/styles';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>
          NEW APP!
        </Text>
        <Text>App created successfully!</Text>
      </SafeAreaView>
    );
  }
}
