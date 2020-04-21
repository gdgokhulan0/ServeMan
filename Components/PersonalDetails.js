import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { name, mobileNumber, emailId } from '../actions/actionCreators'
import { connect, useDispatch } from 'react-redux';

function PersonalDetails(props) {
    const [customerName, setCustomerName] = useState('');
    const [customerMobileNumber, setCustomerMobileNumber] = useState('');
    

    return (
        <View style={styles.contentView} >
            <TextInput label='Name'
                placeholder='Enter your Name'
                value={customerName}
                style={styles.nameTextInput}
                onChangeText={(text) => { setCustomerName(text); }}
            />

            <TextInput
                style={styles.nameTextInput}
                label='Mobile Number'
                underlineColor = 'white'
                selectionColor = 'black'
                mode='flat'
                placeholder='Enter your Mobile Number'
                value={customerMobileNumber}
                onChangeText={(text) => { setCustomerMobileNumber(text); }}
                keyboardType={'numeric'}
            />

            <View style={styles.doneBtn}>
                <Button
                    title="go to home"
                    color='#1f4287'
                    onPress={() => { props.navigation.navigate("Home") }}
                />
                <Button
                    title="done"
                    color='#1f4287'
                    onPress={ ()=>{
                        props.name(customerName);
                        props.mobileNumber(customerMobileNumber);
                        props.navigation.navigate("Technical Details");
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },
    nameTextInput: {
        marginBottom:20,
    },
    doneBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 30,
        paddingBottom: 10
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.name,
        mobileNumber: state.mobileNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        name: (customerName) => dispatch(name(customerName)),
        mobileNumber: (customerMobileNumber) => dispatch(mobileNumber(customerMobileNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);