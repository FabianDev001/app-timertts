import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spring, config } from 'react-spring/renderprops';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default function WebApp() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Simulate a delay of 1 second before showing the text
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: showText ? 1 : 0 }}
        config={config.default}
      >
     // @ts-ignore
        {props => (
          <Text style={{ ...styles.text, opacity: props.opacity }}>
            It just works - Web
          </Text>
        )}
      </Spring>
    </View>
  );
}
