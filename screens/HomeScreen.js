//@flow

import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ArtistList from '../components/ArtistList'
import {geoGetTopArtists} from '../APIs/api'

export default class HomeScreen extends Component {
  state = {
    artistsData: [
      {
        image: 'https://lastfm-img2.akamaized.net/i/u/ar0/7a3af961a2225ebb604a238058657e53.jpg',
        name: 'Undead Corporation',
        likes: 200,
        comments: 140
      }
    ]
  }

  componentDidMount(){
    geoGetTopArtists()
      .then(data => {
        this.setState({
          artistsData: data
        })
      })
  }

  render() {
    const artistList = this.state.artistsData

    return (
      <View style={styles.container}>
        <ArtistList artists={artistList}/>
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
