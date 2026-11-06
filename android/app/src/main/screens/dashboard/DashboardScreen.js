import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,} from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.subHeading}>
        Welcome to Invoice Inventory
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>Today's Sales</Text>
        <Text style={styles.value}>Rs. 12,500</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Monthly Sales</Text>
        <Text style={styles.value}>Rs. 2,45,000</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Total Products</Text>
        <Text style={styles.value}>120</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Total Customers</Text>
        <Text style={styles.value}>65</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Low Stock Items</Text>
        <Text style={styles.value}>8</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pending Payments</Text>
        <Text style={styles.value}>Rs. 35,000</Text>
      </View>


      <Text style={styles.section}>
        Recent Invoices
      </Text>

      <TouchableOpacity
        style={styles.invoice}
        onPress={() => navigation.navigate('InvoiceList')}>
        <Text style={styles.invoiceText}>
          #INV001 - Ali
        </Text>
        <Text style={styles.invoiceAmount}>
          Rs. 3500
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.invoice}
        onPress={() => navigation.navigate('InvoiceList')}>
        <Text style={styles.invoiceText}>
          #INV002 - Ahmed
        </Text>
        <Text style={styles.invoiceAmount}>
          Rs. 2200
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.invoice}
        onPress={() => navigation.navigate('InvoiceList')}>
        <Text style={styles.invoiceText}>
          #INV003 - Sara
        </Text>
        <Text style={styles.invoiceAmount}>
          Rs. 4100
        </Text>
      </TouchableOpacity>

      <Text style={styles.section}>
        Quick Actions
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InvoiceList')}>
        <Text style={styles.buttonText}>
          Create Invoice
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.buttonText}>
          Add Product
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}>
        <Text style={styles.buttonText}>
          View Products
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CustomerList')}>
        <Text style={styles.buttonText}>
          Add Customer
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PurchaseList')}>
        <Text style={styles.buttonText}>
          Add Purchase
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InvoiceList')}>
        <Text style={styles.buttonText}>
          View All Invoices
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CustomerList')}>
        <Text style={styles.buttonText}>
          View Customers
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PurchaseList')}>
        <Text style={styles.buttonText}>
          View Purchases
        </Text>
      </TouchableOpacity>
      <View style={{height: 30}} />
      </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#001f54',
    marginTop: 20,
  },

  subHeading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    color: '#555',
  },

  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001f54',
    marginTop: 5,
  },

  section: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#001f54',
  },

  invoice: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },

  invoiceText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },

  invoiceAmount: {
    fontSize: 16,
    color: '#001f54',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#001f54',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

});