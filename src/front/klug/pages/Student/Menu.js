import React from 'react';
import { View } from 'react-native';
import styles from "./Menu.styles";
import KlugButton from '../../components/Buttons/KlugButtons';
import { createStackNavigator } from '@react-navigation/stack';

export default function MenuStudent({navigation}) {

  const Stack = createStackNavigator();

  function abrirAtividadesAvaliadas(){
    navigation.navigate('Atividades Avaliadas');
  }

  return (
    <View>
      <View style={styles.container}>
        <KlugButton 
              mode="contained" 
              title='Atividades avaliadas'
              onPress={abrirAtividadesAvaliadas}>
        </KlugButton>
        <KlugButton 
              mode="contained" 
              title='Atividades publicadas'>
        </KlugButton>
      </View>
    </View>
  );
}