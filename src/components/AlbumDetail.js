import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import FitImage from 'react-native-fit-image';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle} >
          <Image
            style={thumbnailStyle}
            source={{ uri: 'http://www.songnotes.cc/images/artists/TaylorSwift.jpg' }}
          />
        </View>
        <View style={headerContentStyle} >
          <Text style={headerTextStyle} >{ album.title }</Text>
          <Text>{ album.artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <FitImage
          source={{ uri: album.image }}
        />
      </CardSection>

    <CardSection>
      <Button buttonText='Buy' onPress={() => Linking.openURL(album.url)} />
    </CardSection>
  </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default AlbumDetail;
