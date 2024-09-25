import React, { Children } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const image = { uri: "https://www.naturemade.com/cdn/shop/articles/green-leafy-vegetables.jpg?v=1615426801" };

const BackgroundComponent = ({children}) => {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View>
          {children}
        </View>
      </ImageBackground>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  
export default BackgroundComponent;