import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export default function AndroidApp() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>It just works - Android</Text>
        </View>
    );
}
