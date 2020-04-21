import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';

import * as firebase from 'firebase';
require("firebase/firestore");

import JobItem from '../Components/JobItem';

function JobTodo() {

    console.log("JOB TODO WOrking!!");
    const dataUpdate = useSelector(state => state.dataUpdated);
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        console.log("Entered Handler");
        const db = firebase.database();
        const service = db.ref('service');
        console.log("Querying on child");
        service.once('value', (snapshot) => {
            console.log("Establising Connection");
            const data = snapshot.val();
            if (!data) {
                console.log("No Data Fetched");
                return;
            }
            const keys = Object.keys(data);
            const newItems = [];
            keys.forEach(key => {
                newItems.push({
                    "name": data[key].name,
                    "billNumber": data[key].billNumber,
                    "mobileNumber": data[key].mobileNumber,
                    "receivedDate": data[key].receivedDate,
                    "modelNumber": data[key].modelNumber,
                    "brand": data[key].brand,
                    "deliveryDate": data[key].deliveryDate,
                    "estimatedAmount": data[key].estimatedAmount,
                    "seenDamages": data[key].seenDamages,
                    "problem": data[key].problem,
                    "completed" : data[key].completed,
                })
            });
            setTodoItems(newItems);
            console.log("TodoItems Loaded");
        });
    }, [dataUpdate]);
    return (
        <View style={styles.cardView}>
            {todoItems.map(item => !item.completed && <JobItem 
            key={item.billNumber} 
            name={item.name} 
            mobileNumber ={ item.mobileNumber}
            deliveryDate = {item.deliveryDate}
            problem = {item.problem}
            id = {item.billNumber}
             />)}
        </View>
    )
}
const styles = StyleSheet.create({
    cardView: {
        marginBottom: 10,
        padding : 5,
        backgroundColor: 'black',
    }
})

export default JobTodo;