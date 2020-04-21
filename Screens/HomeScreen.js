import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';

import NotificationPane from '../Components/NotificationPane';
import HeaderPane from '../Components/HeaderPane';
import JobTodo from '../Components/JobTodo';
import Login from '../Components/Login';
import { dataUpdated, isLoggedIn } from '../actions/actionCreators';

function HomeScreen(props) {

    const dispatch = useDispatch();
    const dataUpdate = useSelector(state => state.dataUpdated);
    const isLogged = useSelector(state => state.isLoggedIn);

    return (
        <View style={styles.homeRootView}>
            <NotificationPane />
            <HeaderPane title="Home" />
            <View style={styles.homeView}>
                <ScrollView style={styles.jobView} >
                    {isLogged?<JobTodo />:<Login />}
                </ScrollView>
                <TouchableOpacity style={styles.reloadBtnView} disabled={!isLogged} >
                    <Ionicons name="md-notifications"  size={32} color='white' onPress={() => { dispatch({ type: "DATA_UPDATED", payload: !dataUpdate }) }} />
                </TouchableOpacity>
                <View style={styles.btnView}>
                    <Button color='#1f4287' mode='contained' disabled={!isLogged} onPress={() => props.navigation.navigate('Service')} >process a Service</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeRootView: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#121212'
    },
    jobView: {
        flex: 2,
        padding: 10,
        backgroundColor: 'black',
    },
    homeText: {
        fontSize: 34,
        color: 'white',
        padding: 10
    },
    reloadBtnView: {
        backgroundColor : 'black',
        alignItems : 'flex-end'

    },
    btnView: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    homeView: {
        flex: 1,
        flexDirection: 'column'
    },
});


export default (HomeScreen);