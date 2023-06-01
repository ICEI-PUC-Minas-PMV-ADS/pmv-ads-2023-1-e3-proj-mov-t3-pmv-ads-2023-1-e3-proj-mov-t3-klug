import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function HomeStudent() {
  return (
    <View style={styles.container}>
      <Text>Home Student!</Text>
      <StatusBar style="auto" />
    </View>
  );
}