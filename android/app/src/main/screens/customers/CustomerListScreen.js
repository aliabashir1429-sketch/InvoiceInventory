import React, {useState} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,TextInput,Alert} from 'react-native';
export default function CustomerListScreen({navigation, route}) {
  const [customers, setCustomers] = useState(
    route.params?.customers || [],
  );
const [search, setSearch] = useState('');
React.useEffect(() => {
    if (route.params?.newCustomer) {
    setCustomers(prev => [...prev, route.params.newCustomer]);
    navigation.setParams({
    newCustomer: null,
    });}
    }, [route.params?.newCustomer]);
const deleteCustomer = id => {
    Alert.alert(
    'Delete Customer',
    'Are you sure you want to delete this customer?',
    [{
        text: 'Cancel',
        style: 'cancel',
    },
    {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
        setCustomers(prev =>
        prev.filter(customer => customer.id !== id),
        );},},],);};

const filteredCustomers = customers.filter(customer =>
customer.name.toLowerCase().includes(search.toLowerCase()),
);
const renderCustomer = ({item}) => (
    <View style={styles.customerCard}>
    <View style={styles.customerInfo}>
    <Text style={styles.customerName}>{item.name}</Text>
    <Text style={styles.customerText}>
    📞 {item.phone}
    </Text>

    <Text style={styles.customerText}>
    ✉️ {item.email}
    </Text>
    <Text style={styles.customerText}>
    📍 {item.address}
    </Text>
    </View>
    <View style={styles.buttons}>
    <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
        Alert.alert(
        'Customer Details',
        `Name: ${item.name}\nPhone: ${item.phone}\nEmail: ${item.email}\nAddress: ${item.address}`,
        );
        }}>
    <Text style={styles.buttonText}>View</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteCustomer(item.id)}>
    <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
    </View>
    </View>);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Customer List</Text>
    <TextInput
        style={styles.searchInput}
        placeholder="Search Customer"
        value={search}
        onChangeText={setSearch}/>
    <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCustomer')}>
    <Text style={styles.addButtonText}>
        + Add Customer
    </Text>
    </TouchableOpacity>
        {filteredCustomers.length === 0 ? (
    <Text style={styles.noCustomer}>
        No customers found
    </Text>
    ) : (
    <FlatList
        data={filteredCustomers}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCustomer}/>
    )}
    </View>
    );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
searchInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
customerCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
customerInfo: {
    marginBottom: 10,
  },
customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
customerText: {
    fontSize: 15,
    marginBottom: 4,
    color: '#555',
  },
buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
viewButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
noCustomer: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 17,
    color: '#777',
  },
});