//@flow

import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {Scene, Router} from 'react-native-router-flux'

import Home from './screens/HomeScreen'
import ArtistDetail from './screens/ArtistDetailScreen'
import Login from './screens/LoginScreen'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" hideNavBar />
            <Scene key="login" component={Login} title="Login" hideNavBar />
            <Scene key="artistdetail" component={ArtistDetail} title="Artist Detail" hideNavBar={false} />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray'
  },
    statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
});
