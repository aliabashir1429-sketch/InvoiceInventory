import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style=
      {styles.container}>
      <Text style=
      {styles.logoText}>
      Invoice Inventory
      </Text>
      <Text style=
      {styles.tagline}>
      Inventory Management System
      </Text>
      <ActivityIndicator size="large" 
      color="black" 
      style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1E293B', 
    alignItems: 'center', 
    justifyContent: 'center' 
    },
  logoText: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 8 
    },
  tagline: { 
    fontSize: 16, 
    color: '#94A3B8' 
    },
  loader: { 
    marginTop: 30 
    },
});