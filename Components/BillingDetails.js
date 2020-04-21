import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { TextInput } from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker'

import { deliveryDate, receivedDate, estimatedAmount, billNumber } from '../actions/actionCreators';
import moment from 'moment';


function BillingDetails(props) {
    const [customerBillNumber, setBillNumber] = useState();
    const [customerRecevingDate, setReceivingDate] = useState();
    const [customerDeliveryDate, setDeliveryDate] = useState();
    const [deliveryDatePickerVisiblity, setDeliveryDateVisibility] = useState(false);
    const [receivedDatePickerVisiblity, setReceivingDateVisibility] = useState(false);
    const [customerEstimate, setEstimate] = useState();

    return (
        <View style={styles.contentView}>

            <TextInput
                style={styles.nameTextInput}
                label="Bill Number"
                value={customerBillNumber}
                onChangeText={(text) => { setBillNumber(text) }}
                keyboardType={'numeric'}
            />


            <TextInput
                style={styles.nameTextInput}
                label="Receving Date"
                value={customerRecevingDate}
                onFocus = {()=>{setReceivingDateVisibility(true)}}
                onChangeText = {(text)=>{setReceivingDate(text)}}
            />

            <DateTimePicker
                value={customerRecevingDate}
                isVisible={receivedDatePickerVisiblity}
                mode='date'
                display='default'
                onConfirm={(date) => { setReceivingDateVisibility(false); setReceivingDate(moment(date).format('DD/MM/YYYY')); }}
                onCancel={() => { setReceivingDateVisibility(false) }}
            />


            <TextInput
                style={styles.nameTextInput}
                label="Delivery Date"
                value={customerDeliveryDate}
                onFocus={() => { setDeliveryDateVisibility(true) }}
                onChangeText = {(text)=>{setDeliveryDate(text)}}
            />
            <DateTimePicker
                value={customerDeliveryDate}
                isVisible={deliveryDatePickerVisiblity}
                mode='date'
                display='default'
                onConfirm={(date) => { setDeliveryDateVisibility(false); setDeliveryDate(moment(date).format('DD/MM/YYYY')); }}
                onCancel={() => { setDeliveryDateVisibility(false) }}
            />


            <TextInput
                style={styles.nameTextInput}
                label="Estimated Amount"
                value={customerEstimate}
                onChangeText={(text) => { setEstimate(text) }}
                keyboardType={'numeric'}
            />

            <View style={styles.doneBtn}>
                <Button
                    title="done"
                    color='#1f4287'
                    onPress={() => {
                        props.estimatedAmount(customerEstimate);
                        props.deliveryDate(customerDeliveryDate);
                        props.receivedDate(customerRecevingDate);
                        props.billNumber(customerBillNumber);
                        props.navigation.navigate('Final Message')
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    nameTextInput: {
        backgroundColor: 'white',
        marginBottom: 20,
    },
    doneBtn: {
        paddingTop: 10,
        paddingBottom: 10
    }
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
        receivedDate: (customerReceivedDate) => dispatch(receivedDate(customerReceivedDate)),
        deliveryDate: (customerDeliveryDate) => dispatch(deliveryDate(customerDeliveryDate)),
        estimatedAmount: (customerEstimate) => dispatch(estimatedAmount(customerEstimate)),
        billNumber: (customerBillNumber) => dispatch(billNumber(customerBillNumber)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);