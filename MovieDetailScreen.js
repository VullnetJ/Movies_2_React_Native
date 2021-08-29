import React from 'react';
import { Text, View, Image, Alert, StyleSheet, TouchableOpacity, Button} from 'react-native';
// import YouTube from 'react-native-youtube';
import Video from 'react-native-video';


export default class MovieDetailScreen extends React.Component {

  render() {
    const { route } = this.props;
    const { movie } = route.params; 
    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
    
    let imageurl = IMAGEPATH + movie.backdrop_path;

    return (
      <View>
          <Image source={{uri: imageurl}} style={styles.image}  />
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.text}>{movie.release_date}</Text>
          <Text style={styles.text}>{movie.overview}</Text> 
         {/* <View> */}
         {/* <YouTube
            videoId="id" // The YouTube video ID
            play // control playback 
            fullscreen // fullscreen or inline
            loop // end the loop or not
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
            />
         </View> */}
         <Text>{""}</Text>
         
       <Text style={styles.styling}> If you want to watch the trailer, please click the button down below to watch it. 
      </Text>
          <Button style={styles.styling}
            title="Click to Watch Trailer"
            color="orange"   
            onPress={() => Alert.alert('Loading Movie Trailer, Please wait...')}
          
          /> 
     
      </View>
      
    )
  }
}

const styles = StyleSheet.create({

  image: {
    aspectRatio: 670/250
  },
styling: {
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black'
},
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  text: {
    fontSize: 12,
    flexWrap: 'wrap'
  },
});
