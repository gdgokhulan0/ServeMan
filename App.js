import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import * as firebase from 'firebase';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import store from './store';

import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'
import PersonalDetails from './Components/PersonalDetails';
import TechnicalDetails from './Components/TechnicalDetails';
import BillingDetails from './Components/BillingDetails';
import FinalMessage from './Components/FinalMessage';


const DrawerNavigator = createDrawerNavigator();
const StackNavigator = createStackNavigator();
function App() {
  //firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOx_h7N5TdOviX0Z9xC-gGMjzmQ8J8wSc",
    authDomain: "serveman-5f742.firebaseapp.com",
    databaseURL: "https://serveman-5f742.firebaseio.com",
    projectId: "serveman-5f742",
    storageBucket: "serveman-5f742.appspot.com",
    messagingSenderId: "605853970975",
    appId: "1:605853970975:web:c2f0b36a29d5e3a36a1b2a",
    measurementId: "G-CJNNQZG9XE"
  };
  // Initialize Firebase
  if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) };

  const createServiceStack = () => (
    <StackNavigator.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        height: 100,
        backgroundColor: 'black'
      }
    }}>
      <StackNavigator.Screen name="Personal Details" component={PersonalDetails} />
      <StackNavigator.Screen name="Technical Details" component={TechnicalDetails} />
      <StackNavigator.Screen name="Billing Details" component={BillingDetails} />
      <StackNavigator.Screen name="Final Message" component={FinalMessage} />
    </StackNavigator.Navigator>
  )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator.Navigator initialRouteName="Home"
          drawerType={'slide'}
          drawerStyle={{ backgroundColor: '#000' }}
          drawerContentOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white'
          }}>
          <DrawerNavigator.Screen name="Home" component={HomeScreen} />
          <DrawerNavigator.Screen name="Service" component={createServiceStack} />
          <DrawerNavigator.Screen name="About" component={AboutScreen} />
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  }
});

export default App;