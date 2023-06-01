import React from 'react';
import { View } from 'react-native';
import styles from "./Menu.styles";
import KlugButton from '../../components/Buttons/KlugButtons';

export default function MenuStudent({navigation}) {
  function abrirAtividadesAvaliadas(){
    navigation.navigate('Atividades Avaliadas');
  }

  function abrirAtividadesPublicadas(){
    navigation.navigate('Atividades Publicadas');
  }

  return (
    <View>
      <View style={styles.container}>
        <KlugButton 
              mode="contained" 
              title='Atividades publicadas'
              onPress={abrirAtividadesPublicadas}>
        </KlugButton>
      </View>
    </View>
  );
}