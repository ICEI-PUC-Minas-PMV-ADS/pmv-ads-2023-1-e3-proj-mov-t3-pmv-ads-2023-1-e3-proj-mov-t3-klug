import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from "./styles";

export default function Login({handleLogin}) {
  return (
    <View style={styles.container}>
      <Text>Página Login!</Text>
      <Button title="Simular Login" onPress={()=> handleLogin(true)} />
      <StatusBar style="auto" />
    </View>
  );
}
//TODO: Bruno alterar aqui.