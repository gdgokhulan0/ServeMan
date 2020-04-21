import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function HeaderPane(props) {
    console.log("Header Pane Working!!");
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}> {props.title} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerView: {
        backgroundColor : '#000',
        justifyContent:'center',
        alignItems:"center",
        padding :20
    },
    headerText: {
        color:'white',
        fontSize: 24
    },

});

export default HeaderPane;