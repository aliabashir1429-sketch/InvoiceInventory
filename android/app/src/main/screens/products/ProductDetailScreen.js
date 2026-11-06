import React from 'react';
import {View,Text,StyleSheet,ScrollView,} from 'react-native';
export default function ProductDetailScreen({route}) {
const {product} = route.params;
return (
    <ScrollView style={styles.container}>
    <Text style={styles.heading}>
        Product Details
    </Text>
    <View style={styles.card}>
    <Text style={styles.label}>
        Product Name
    </Text>
    <Text style={styles.value}>
        {product.name}
    </Text>
    <Text style={styles.label}>
        Category
    </Text>
    <Text style={styles.value}>
          {product.category}
        </Text>


        <Text style={styles.label}>
          Price
        </Text>

        <Text style={styles.value}>
          Rs. {product.price}
        </Text>


        <Text style={styles.label}>
          Quantity
        </Text>

        <Text style={styles.value}>
          {product.quantity}
        </Text>

      </View>

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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#777',
    marginTop: 10,
  },

  value: {
    fontSize: 19,
    fontWeight: '500',
    color: '#222',
    marginTop: 5,
    marginBottom: 12,
  },

});