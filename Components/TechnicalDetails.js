import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import {ImagePicker} from 'expo'

import {modelNumber, brand, problem, seenDamages} from '../actions/actionCreators';

 import * as firebase from 'firebase'

function TechnicalDetails(props) {
    const [customerBrand, setBrand] = useState();
    const [customerModelNumber, setModelNumber] = useState();
    const [customerProblem, setProblem] = useState();
    const [customerSeenDamages, setSeenDamages] = useState();

    // const takePhotoHandler = async() => {
    //     const result = await ImagePicker.launchCameraAsync();

    //     if(!result.cancelled){
    //         uploadImage(uri, toString(props.name+props.mobileNumber))
    //         .then(()=>{Alert.alert("Success", " Image inserted")})
    //         .catch((err)=>{Alert.alert("Error", err)})
    //     }
    // }

    // const uploadImage = async(uri, imageName) =>{
    //     const response = await fetch(uri);
    //     const blob = await response.blob();

    //     const ref = firebase.storage().ref().child("images/"+imageName);
    //     return ref.put(blob);
    // }

    return (
        <View style={styles.contentView}>

            <TextInput
                style={styles.nameTextInput}
                label="Brand"
                value={customerBrand}
                onChangeText={(text) => { setBrand(text) }}
            />

            <TextInput
                style={styles.nameTextInput}
                label="Model Number"
                value={customerModelNumber}
                onChangeText={(text) => { setModelNumber(text) }}
            />

            <TextInput
                style={styles.nameTextInput}
                label="Problem of the Device...."
                value={customerProblem}
                onChangeText={(text) => { setProblem(text) }}
            />

            <TextInput
                style={styles.nameTextInput}
                label="Seen Damages"
                value={customerSeenDamages}
                onChangeText={(text) => { setSeenDamages(text) }}
            />

            <Button 
            title = "Take photo !"
            color='#1f4287' 
            onPress={()=>{}}/>

            <View style={styles.doneBtn}>
                <Button
                    title="done"
                    color='#1f4287'
                    onPress={() => { 
                        props.problem(customerProblem);
                        props.seenDamages(customerSeenDamages);
                        props.brand(customerBrand);
                        props.modelNumber(customerModelNumber);
                        props.navigation.navigate("Billing Details") }}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modelNumber: (customerModelNumber) => dispatch(modelNumber(customerModelNumber)),
        brand: (customerBrand) => dispatch(brand(customerBrand)),
        problem: (customerProblem) => dispatch(problem(customerProblem)),
        seenDamages: (customerSeenDamages) => dispatch(seenDamages(customerSeenDamages)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalDetails);