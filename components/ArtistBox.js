//@flow

import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class ArtsitBox extends Component {
  render() {
    const {image, name, likes, comments} = this.props.artist
    return (
      <View style={styles.artistBox}>
        <Image style={styles.images} source={{uri: image}} />
        <View style={styles.artistInfo}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.artistRate}>
            <View style={styles.artistRateItem}>
              <Icon name="ios-heart-outline" size={30} color="gray"></Icon>
              <Text style={styles.artistRateText}>{likes}</Text>
            </View>
            <View style={styles.artistRateItem}>
              <Icon name="ios-chatbubbles-outline" size={30} color="gray"></Icon>
              <Text style={styles.artistRateText}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: 150,
    height: 150,
  },
  artistBox: {
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'darkgray',
    shadowOpacity: .1,
    shadowOffset: {
      height: 5,
      width: 0
    },
    elevation: 5,
    height: 150,
  },
  artistInfo:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    flex: 1,
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  artistRate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 10
  },
  artistRateItem:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  artistRateText:{
    color: 'gray'
  }
});
