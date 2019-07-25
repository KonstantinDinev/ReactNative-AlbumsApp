import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    console.log('lifecycle event componentWillMount');
    //debugger;
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => this.setState({ albums: response.data }));

      this.loadData();
  }

  loadData = async () => {
    const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    const { data } = res;

    return this.setState({ albums: data });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    const { albums } = this.state;

    return (
      <ScrollView>
        {
          (albums.length === 0)
            ? (<Text>Loading ...</Text>)
            : this.renderAlbums()
        }
      </ScrollView>
    );
  }

}

export default AlbumList;
