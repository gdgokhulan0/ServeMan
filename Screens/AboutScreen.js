import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NotificationPane from '../Components/NotificationPane';
import HeaderPane from '../Components/HeaderPane';

function AboutScreen() {
    return (
        <View style={styles.aboutRootView}>
            <NotificationPane />
            <HeaderPane title="About App" />
            <View style={styles.aboutView} >
                <Text style={styles.aboutText}>
                    It is a simple customer service app for any smartphone which completes service processing and workload updating, and generates a customer message that can be sent to the service people. Please use this app wisely.
                </Text>
            </View>
            <View style={styles.aboutAppView}>
    <Text style={styles.aboutApp}>Version : 1.1.0 {'\n'} Framework : Node.js {'\n'} External Library : React-Native 
    {'\n'} Development Environment : Provided by Expo.io </Text>
            </View>
            <View style={styles.aboutDeveloperView}>
                <Text style={styles.aboutDeveloper}>Developed By : Gokhulan Damodaran</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    aboutRootView: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#121212'
    },
    aboutView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#121212',
        flexWrap: 'wrap'
    },
    aboutText: {
        fontSize: 12,
        color: 'white',
        padding: 10
    },
    aboutDeveloperView:{
        alignItems:'center',
    },
    aboutDeveloper:{
        fontSize: 20,
        color: 'grey',
        padding: 10
    },
    aboutAppView:{
        alignItems:'center',
        justifyContent:'center'
    },
    aboutApp:{
        fontSize: 10,
        color: 'grey',
        padding: 10
    }
});

export default AboutScreen;