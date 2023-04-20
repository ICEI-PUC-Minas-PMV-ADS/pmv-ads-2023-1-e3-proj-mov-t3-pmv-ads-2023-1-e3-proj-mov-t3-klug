import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Atividades Criadas!</Text>
      <StatusBar style="auto" />
    </View>
  );
}