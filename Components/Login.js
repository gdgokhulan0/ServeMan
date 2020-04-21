import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import * as firebase from 'firebase';
import { isLoggedIn, emailId, password } from '../actions/actionCreators';

function Login() {

    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const dispatch = useDispatch();

    return (
        <View style={styles.loginView}>
            <TextInput
                style = {styles.textInputField}
                placeholder='Email Id'
                label='Email Id'
                value = {userEmail}
                onChangeText = {(text)=>{setUserEmail(text)}}
            />

            <TextInput
                style = {styles.textInputField}
                placeholder='Password'
                label='Password'
                secureTextEntry={true}
                value = {userPass}
                onChangeText = {(text)=>{setUserPass(text)}}
            />
            <View style={styles.btnActionView}>
            <Button 
            mode = 'contained' 
            color = '#1f4287'
            onPress = {()=>{
                console.log("Button Pressed");
                dispatch(emailId(userEmail));
                dispatch(password(userPass));
                firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(()=>{
                    console.log("Successfully Logged In")
                    dispatch(isLoggedIn(true));
                }).catch(err => console.log(err));
            }}
            >Login</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnActionView :{
        paddingTop :20,
        flex :1,
        flexDirection : 'row',
        justifyContent :'space-evenly'
    },
    loginView: {
        padding: 20,
    },
    textInputField : {
        marginBottom :10,
    },
});

export default Login;