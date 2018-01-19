import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spiner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error:'', loading: false };

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });        

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() =>{
                        this.setState({ error: 'Authentication Failed.' });
                    })
            });
    }

    renderButton(){
        if(this.state.loading){
            return <Spiner size="small" />
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>   
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="real@email.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                    <Text style={styles.errorStyle}>{this.state.error}</Text>                    
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export default LoginForm;