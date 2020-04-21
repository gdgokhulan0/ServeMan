import React from 'react';
import { StyleSheet, View } from 'react-native';

function NotificationPane() {
    console.log("Notification Pane Working!!");
    return(
    <View style={styles.notification} />
    );
}

const styles = StyleSheet.create({
    notification: {
        height: 34,
        backgroundColor: '#000',
    },
});

export default NotificationPane;