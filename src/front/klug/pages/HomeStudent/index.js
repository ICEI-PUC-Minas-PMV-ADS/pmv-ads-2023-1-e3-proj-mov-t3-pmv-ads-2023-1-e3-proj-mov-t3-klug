import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./styles";

export default function HomeStudent() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Seja bem-vindo!</Text>
      <Image
            source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
            style={styles.Logo} />
      <Text style={[styles.quoteText, styles.impactfulText]}>
        "O sucesso é a soma de pequenos esforços, {"\n"}REALIZADOS DIARIAMENTE"
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
