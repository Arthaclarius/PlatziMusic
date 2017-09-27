//@flow

import React, {Component} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import ArtistBox from './ArtistBox'

export default class ArtistList extends Component {
  constructor(props){
    super(props)

    this.state = {
      artistData: this.props.artists
    }
  }

  componentWillReceiveProps(NewProps){
    if (NewProps.artists !== this.props.artists) {
      this.setState({
        artistData: NewProps.artists
      })
    }
  }

  handlePressArtistBox(artist){
    Actions.artistdetail({artist: artist})
  }

  render() {
    return (
      <FlatList
        data={this.state.artistData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => this.handlePressArtistBox(item)}>
              <ArtistBox key={index} artist={item} />
            </TouchableOpacity>
          )
        }}
       />
    );
  }
}
