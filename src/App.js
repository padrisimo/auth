import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import apiKey from '../apikey';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(apiKey);
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>
                    Ou yea!
                </Text>
            </View>
        );
    }
}

export default App;