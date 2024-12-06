import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView, PermissionsAndroid, StatusBar } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import AndroidApp from '../android/AndroidApp';
import IOSApp from '../ios/IOSApp';
import WebApp from '../web/WebApp';




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
    logo: {
        width: 66,
        height: 58,
    },
    footer: {
        alignItems: 'center',
        margin: 10,
    },
    footerText: {
        fontSize: 12,
    },
    spaceOut: {
        paddingTop: 20,
    },
    spaceOutCenter: {
        paddingTop: 20,
    },
});



const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            const clientOS = Platform.OS;
           switch(clientOS) {
                case "android":
                    navigation.navigate('AndroidApp');
                    break;
                case "ios":
                    navigation.navigate('IOSApp');
                    break;
                case "web":
                    navigation.navigate('WebApp');
                    break;
                default:
                    console.warn("Error: No supported OS detected.")
                    navigation.navigate('HomeScreen');
                    break;
            }

        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigation]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://cdn.discordapp.com/attachments/719865396982710323/1163434099273388072/150.png?ex=653f8f70&is=652d1a70&hm=9b74b283c50600db0c5caddede78efe4a127df06c6076e56c55a82b24c13a63d&',
                    }}
                />
                <Text style={styles.headerText}>Apeture Science</Text>
                <Text style={styles.headerTextB}>presents</Text>
            </View>

            <ScrollView>
                <View style={styles.spaceOutCenter}>
                    <Text>Loading...</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://loading.io/asset/696961'
                        }} />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Copyright (c) lololol</Text>
                <Text style={styles.footerText}>Legal text here</Text>
            </View>
        </View>
    );
};



export default HomeScreen;
