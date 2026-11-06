import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
  if (email.trim() === '' || password.trim() === '') {
    Alert.alert(
        'Error',
        'Please enter email and password',
      );
  return;
  }
  try {
      await AsyncStorage.setItem(
        'isLoggedIn',
        'true',
      );
      await AsyncStorage.setItem(
        'userEmail',
        email,
      );
     Alert.alert(
        'Login Successful',
        'Welcome to Invoice Inventory',
        [
          {
            text: 'OK',

            onPress: () => {
              navigation.replace('Dashboard');
            },},],);} 
        catch (error) {
     console.log('Login Error:', error);
     Alert.alert(
        'Error',
        'Something went wrong',
      );}};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
    <Text style={styles.subtitle}>
        Sign in to your Invoice Inventory account
      </Text>
    <Text style={styles.label}>
        Email Address
    </Text>
    <TextInput
        style={styles.input}
        placeholder="name@email.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"/>
    <Text style={styles.label}>
        Password
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}/>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}>

      <Text style={styles.loginButtonText}>
          Login
      </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}>
      <Text style={styles.forgotPassword}>
          Forgot Password?
      </Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
      <Text style={styles.registerText}>
          Don't have an account?
      </Text>
      <TouchableOpacity
          onPress={() => navigation.navigate('Register')}>
      <Text style={styles.registerLink}>
            Sign Up
      </Text>
      </TouchableOpacity>
      </View>
      </View>
  );}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#001f54',
    textAlign: 'center',
    marginBottom: 10,
  },
subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 7,
    marginTop: 10,
  },
input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
loginButton: {
    backgroundColor: '#001f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
forgotPassword: {
    color: '#001f54',
    textAlign: 'right',
    marginTop: 15,
    fontWeight: '600',
  },
registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
registerText: {
    color: '#666',
    fontSize: 15,
  },
registerLink: {
    color: '#001f54',
    fontSize: 15,
  },
registerLink: {
    color: '#001f54',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },});