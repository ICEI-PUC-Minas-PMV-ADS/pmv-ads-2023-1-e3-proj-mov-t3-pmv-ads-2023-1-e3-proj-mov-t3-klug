import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Página Principal!</Text>
      <StatusBar style="auto" />
    </View>
  );
}