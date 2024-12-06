import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Platform, Animated, Easing } from 'react-native';

import SvgComponent from './src/components/SvgSpinner';

const LandingScreen = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const opacity = new Animated.Value(0);
  const contentOpacity = new Animated.Value(0);

  useEffect(() => {
    // Simulate a delay of 3 seconds before showing the home screen
    const timer = setTimeout(() => {
      setShowHomeScreen(true);
      // Fade in the home screen
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500, // Adjust the duration as needed
        easing: Easing.linear, // Optional easing function
        useNativeDriver: false,
      }).start(() => {
        // After the home screen animation is complete, fade in the content
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 500, // Adjust the duration as needed
          easing: Easing.linear, // Optional easing function
          useNativeDriver: false,
        }).start();
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Determine the client OS-specific component based on the platform
  let ClientApp;
  if (Platform.OS === 'android') {
    ClientApp = require('./android/AndroidApp').default;
  } else if (Platform.OS === 'ios') {
    ClientApp = require('./ios/IOSApp').default;
  } else {
    ClientApp = require('./web/WebApp').default;
  }

  return (
    <View style={styles.container}>
      {showHomeScreen ? (
        <Animated.View style={styles.homeScreen}>
          <ClientApp />
        </Animated.View>
      ) : (
        <View style={styles.loadingContainer}>
          <View style={styles.header}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://cdn.discordapp.com/attachments/719865396982710323/1163434099273388072/150.png?ex=653f8f70&is=652d1a70&hm=9b74b283c50600db0c5caddede78efe4a127df06c6076e56c55a82b24c13a63d&',
              }}
            />
            <Text style={styles.headerText}>Apeture Science</Text>
            <Text style={styles.headerTextB}>presents</Text>
          </View>

          <ScrollView>
            <Animated.View style={styles.spaceOutCenter}>
              <Text>Loading...</Text>
              <SvgComponent style={styles.tinyLogo} />
            </Animated.View>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Copyright (c) lololol</Text>
            <Text style={styles.footerText}>Legal text here</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  headerTextB: {
    paddingTop: 3,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  footer: {
    alignItems: 'center',
    margin: 10,
  },
  footerText: {
    fontSize: 12,
  },
  spaceOutCenter: {
    paddingTop: 20,
  },
});

export default LandingScreen;
