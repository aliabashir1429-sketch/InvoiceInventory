import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ScrollView,} from 'react-native';
export default function AddCustomerScreen({navigation}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const addCustomer = () => {
    if (!name || !phone || !email || !address) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
const newCustomer = {
      id: Date.now(),
      name: name,
      phone: phone,
      email: email,
      address: address,
    };
navigation.navigate('CustomerList', {
      newCustomer: newCustomer,
    });
  };

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Add Customer</Text>
    <Text style={styles.label}>Customer Name</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter customer name"
        value={name}
        onChangeText={setName}/>
    <Text style={styles.label}>Phone Number</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}/>
    <Text style={styles.label}>Email</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}/>
    <Text style={styles.label}>Address</Text>
    <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter customer address"
        multiline
        value={address}
        onChangeText={setAddress}/>
    <TouchableOpacity
        style={styles.saveButton}
        onPress={addCustomer}>
    <Text style={styles.saveButtonText}>
          Save Customer
    </Text>
    </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },
label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 13,
    fontSize: 16,
    marginBottom: 18,
  },
addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
saveButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
saveButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});