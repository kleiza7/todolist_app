/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, StatusBar, Text} from 'react-native';
import MainScreen from './src/screens/main';


const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    
    <MainScreen />
    </>
       
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
