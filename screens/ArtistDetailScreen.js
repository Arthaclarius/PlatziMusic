//@flow

import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, Image} from 'react-native';
import ArtistBox from '../components/ArtistBox'
import {geoGetTopArtists} from '../APIs/api'

export default class ArtistDetailScreen extends Component {
  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
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
  },
  artistBoxList:{
    flexDirection: 'column'
  }
});
