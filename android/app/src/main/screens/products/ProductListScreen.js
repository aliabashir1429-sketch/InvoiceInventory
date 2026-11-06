import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,} from 'react-native';
export default function ProductListScreen({
  navigation,
  products,
}) {

const renderProduct = ({item}) => {
return (
  <View style={styles.productCard}>
  <View style={styles.productInfo}>
  <Text style={styles.productName}>
    {item.name}
  </Text>
  <Text style={styles.productText}>
    Category: {item.category}
  </Text>

  <Text style={styles.productText}>
    Price: Rs. {item.price}
  </Text>

  <Text style={styles.productText}>
    Quantity: {item.quantity}
  </Text>
  </View>
  <TouchableOpacity
    style={styles.detailButton}
    onPress={() =>
    navigation.navigate(
    'ProductDetail',
      {
        product: item,
      },
      )}>
  <Text style={styles.detailText}>
    View Details
  </Text>
  </TouchableOpacity>
  </View>
  );
  };
return (
  <View style={styles.container}>
  <Text style={styles.heading}>
    Product List
  </Text>
  <TouchableOpacity
    style={styles.addButton}
    onPress={() =>
    navigation.navigate('AddProduct')
    }>
  <Text style={styles.addButtonText}>
    + Add Product
  </Text>
  </TouchableOpacity>
    {products.length === 0 ? (
  <Text style={styles.noProduct}>
    No products added yet.
  </Text>
   ) : (
  <FlatList
    data={products}
    keyExtractor={item => item.id}
    renderItem={renderProduct}/>)}
    </View>
  );}
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
    marginBottom: 15,
  },
addButton: {
    backgroundColor: '#001f54',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
productCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
productInfo: {
    marginBottom: 12,
  },
productName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#001f54',
    marginBottom: 8,
  },
productText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
detailButton: {
    backgroundColor: '#001f54',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
detailText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
noProduct: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 17,
    color: '#777',
  },});