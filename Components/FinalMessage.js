import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Clipboard, Alert, Button } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { dataUpdated } from '../actions/actionCreators'
import *  as firebase from 'firebase';
import { NavigationActions, StackActions } from '@react-navigation/native'

import 'firebase/firestore';

function FinalMessage(props) {

    const finalText = `Hi ${props.name}, you will be verified that your latest ${props.brand} ${props.modelNumber} help will be resolved before ${props.deliveryDate}, and you will be delivered without a ${props.problem} problem. In order to solve this issue, our Executive calculated the sum of Rs${props.estimatedAmount}. Through your diligence, we thank you. For future reference, save this ticket number ${props.billNumber}. -RR Times and Mobiles`
    const [customerFinalMessage, setMessage] = useState(finalText);

    const db = firebase.database();
    db.ref(`service/${props.billNumber}`)
        .set({
            name: props.name,
            mobileNumber: props.mobileNumber,
            modelNumber: props.modelNumber,
            brand: props.brand,
            problem: props.problem,
            seenDamages: props.seenDamages,
            billNumber: props.billNumber,
            receivedDate: props.receivedDate,
            deliveryDate: props.deliveryDate,
            estimatedAmount: props.estimatedAmount,
            completed : false,
        })
        .then(() => { console.log("Inserted") })
        .catch((err) => { console.log(err) });

    const setToClipboard = async () => {
        await Clipboard.setString(customerFinalMessage);
        Alert.alert("Copied to Clipboard", "You can paste in Recepients Message");
    }

    return (
        <View style={styles.contentView} >
            <View style={styles.msgView}>
                <TouchableOpacity onLongPress={() => setToClipboard()}>
                    <Text style={styles.msgText}>
                        {customerFinalMessage}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailsView}>
                <Text style={styles.detailsText}>Name : {props.name}</Text>
                <Text style={styles.detailsText}>Mobile Number : {props.mobileNumber}</Text>
                <Text style={styles.detailsText}>Brand : {props.brand}</Text>
                <Text style={styles.detailsText}>Model Number : {props.modelNumber}</Text>
                <Text style={styles.detailsText}>Problem : {props.problem}</Text>
                <Text style={styles.detailsText}>Seen Damages : {props.seenDamages}</Text>
                <Text style={styles.detailsText}>Delivery Date : {props.deliveryDate}</Text>
                <Text style={styles.detailsText}>Estimated Amount : {props.estimatedAmount}</Text>
            </View>
            <View style={styles.addJobView}>
                <Button
                    title="Add job"
                    color='#1f4287'
                    onPress={() => {
                        props.dataUpdated;
                        props.navigation.dispatch(StackActions.popToTop());
                        props.navigation.navigate('Home');
                    }
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    msgView: {
        flex: 5,
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#121212',
        flexWrap: 'wrap',
        color: 'white',
    },
    msgText: {
        fontSize: 20,
        color: 'white',
        padding: 10
    },
    detailsView: {
        flex: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsText: {
        color: 'white',
        fontSize: 18,
        padding: 5
    },
    addJobView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const mapStateToProps = (state) => {
    return {
        name: state.name,
        mobileNumber: state.mobileNumber,
        modelNumber: state.modelNumber,
        brand: state.brand,
        problem: state.problem,
        seenDamages: state.seenDamages,
        billNumber: state.billNumber,
        receivedDate: state.receivedDate,
        deliveryDate: state.deliveryDate,
        estimatedAmount: state.estimatedAmount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataUpdated: () => dispatch(dataUpdated(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalMessage);