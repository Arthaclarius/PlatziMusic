//@flow

import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoginScreen extends Component {
  render() {
    const artistList = this.state.artistsData

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
