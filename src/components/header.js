// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  console.log(props);

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.name}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    marginTop: 40,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 35
  }
};

// Make the component available to other parts of the App
export default Header;
