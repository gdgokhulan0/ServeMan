import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Title, Paragraph, Theme } from 'react-native-paper';

import * as firebase from 'firebase';

function JobItem(props) {

    const markAsCompleteHandler = () =>{
        console.log("entered  and going to be updated");
        const ref = firebase.database().ref(`service/`);
        ref.child(`${props.id}`).update({completed: true});
         }

    console.log("Job Item Working");
    return (
        <View style={styles.cardView}>
            <TouchableOpacity activeOpacity = {0.7} >
                <Card elevation={1} style={{ backgroundColor: '#fffeb8' }}>
                    <Card.Title title={props.name} subtitle={props.mobileNumber} />
                    <Card.Content>
                        <Paragraph>{props.problem + '\n'}{props.deliveryDate}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button color='#1f4287' onPress={()=>{ console.log('Marking As Completed'); markAsCompleteHandler()}} >mark as complete</Button>
                    </Card.Actions>
                </Card>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        padding: 5,
        backgroundColor: 'black',
        color: 'white'
    }
})
export default JobItem;