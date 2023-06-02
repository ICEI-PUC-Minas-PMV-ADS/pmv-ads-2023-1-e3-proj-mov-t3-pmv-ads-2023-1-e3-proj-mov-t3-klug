import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./Questao.styles";
import Alternativa from './Alternativa';

export default function Questao(props) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 16, margin: 8, color: '#13315C', fontWeight: 'bold'}}>{props.Text}</Text>
        <SafeAreaView style={styles.container}>
            <FlatList
              data={props.Alternativas}
              renderItem={({item}) => <Alternativa Text={item.text} IdQuestion={props.IdQuestion} IdAnswer={item.id} handleQuestionAnswer={props.handleQuestionAnswer}/>}
              keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </View>
  );
}