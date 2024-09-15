import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Audioplayer({data,getResult}:any) {
  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);


  async function playSound() {
    console.log('Loading Sound');
 

    if(data==1){
        const { sound } = await Audio.Sound.createAsync( require('../assets/sound/music1.mp3'));
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(updateStatus);
        console.log('Playing Sound');
        await sound.playAsync();
    }
    else if(data==2){
        const { sound } = await Audio.Sound.createAsync( require('../assets/sound/music2.mp3'));
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(updateStatus);
        console.log('Playing Sound');
        await sound.playAsync();
    }
    else if(data==3){
        const { sound } = await Audio.Sound.createAsync( require('../assets/sound/music3.mp3'));
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(updateStatus);
        console.log('Playing Sound');
        await sound.playAsync();
    }
    else if(data==4){
        const { sound } = await Audio.Sound.createAsync( require('../assets/sound/music4.mp3'));
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(updateStatus);
        console.log('Playing Sound');
        await sound.playAsync();
    }
    
    
}
const updateStatus = (status:any) => {
    setIsPlaying(status.isPlaying);
    console.log(status.isPlaying);
    
};

  
   // Function to stop sound
const stopSound = async () => {
    if (sound) {
      
      await sound.stopAsync();
      getResult(null)
    }
  };

  useEffect(() => {
    
    return sound
      ? () => {
          console.log('Unloading Sound');

          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if(data){
        playSound()
    }
    
  }, [data]);

  return (
    <View>
      {data&&<Button title="Stop Sound" onPress={stopSound} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
