import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Página Login!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//TODO: Bruno alterar aqui.