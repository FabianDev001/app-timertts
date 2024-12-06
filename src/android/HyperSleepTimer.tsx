import React from 'react';
import { Text, View, Button, Image, ScrollView, PermissionsAndroid, StatusBar } from 'react-native';
import { containerStyles, textStyles  } from './styles/AndroidStyleSheet';
const HyperSleepComponent: React.FC<{ navigation: any }> = ({ navigation }) => {
    async function getPermession() {
      if (!PermissionsAndroid.PERMISSIONS.RECORD_AUDIO) return;
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Cool Photo App Camera Permission',
            message: 'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the audio recorder');
        } else {
          console.log('Audio recorder permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
  
    }
    return (
      <View style={containerStyles.container}>
        <Text>This is the new App Function screen</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
        />
        <Button
          title="Get Permission"
          onPress={() => getPermession()} // Navigate back to the previous screen
        />
      </View>
    );
  };
  

  export default HyperSleepComponent;