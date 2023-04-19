import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function StudentStatisticsCard() {
  return (
    <View style={styles.container}>
      <Text>Componente Card Aluno!</Text>
      <StatusBar style="auto" />
    </View>
  );
}