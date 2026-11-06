import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ScrollView,} from 'react-native';
export default function AddProductScreen({
  navigation,
  setProducts,
}) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const addProduct = () => {
  if (
      name.trim() === '' ||
      price.trim() === '' ||
      quantity.trim() === '' ||
      category.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill all fields',
      );
      return;
    }
    const newProduct = {
      id: Date.now().toString(),
      name: name,
      price: price,
      quantity: quantity,
      category: category,
    };
    setProducts(prevProducts => [
      ...prevProducts,
      newProduct,
    ]);
    Alert.alert(
      'Success',
      'Product added successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('ProductList');
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.heading}>
        Add Product
    </Text>
    <Text style={styles.label}>
        Product Name
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={name}
        onChangeText={setName}/>
    <Text style={styles.label}>
        Price
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}/>
    <Text style={styles.label}>
        Quantity
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}/>
    <Text style={styles.label}>
        Category
    </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}/>
    <TouchableOpacity
        style={styles.saveButton}
        onPress={addProduct}>
    <Text style={styles.saveText}>
          Save Product
    </Text>
    </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20,
  },
heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#001f54',
    marginBottom: 25,
  },
label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 7,
  },
input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
  },
saveButton: {
    backgroundColor: '#001f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
saveText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },});