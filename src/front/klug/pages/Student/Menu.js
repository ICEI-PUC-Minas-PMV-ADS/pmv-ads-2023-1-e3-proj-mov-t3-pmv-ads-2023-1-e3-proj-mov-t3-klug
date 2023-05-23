import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./Menu.styles";
import KlugButton from '../../components/Buttons/KlugButtons';

export default function MenuStudent() {
  return (
    <View style={styles.container}>
      <KlugButton 
            mode="contained" 
            title='Atividades avaliadas'>
      </KlugButton>
      <KlugButton 
            mode="contained" 
            title='Atividades publicadas'>
      </KlugButton>
    </View>
  );
}