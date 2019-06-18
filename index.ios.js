// index.ios.js - place code in here for IOS!

// import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header name={'Albums!'} />
    <AlbumList />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
