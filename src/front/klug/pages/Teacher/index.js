import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function MenuTeacher() {
  return (
    <View style={styles.container}>
      <Text>Menu Professor!</Text>
      <StatusBar style="auto" />
    </View>
  );
}