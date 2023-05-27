import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./LessonPage.styles";
import { ScrollView } from 'react-native-web';
import Questao from '../../components/Lists/Questao';
import KlugButton from '../../components/Buttons/KlugButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LessonPage({route, navigation: { goBack }}) {
  
  const ISDEVELOPMENT = true;
  const storageUserKey = "@kluguser"
  const url = ISDEVELOPMENT ? "https://localhost:7161/api/lesson/" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson/";
  const urlSendAtividade = ISDEVELOPMENT ? "https://localhost:7161/api/lesson/evaluate" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson/evaluate";
  let loginHTTPStatus;

  const { itemId, itemName } = route.params;
  const [data, setData] = useState([]);

  const getAtividadeCompleta = async () => {

    const res = await fetch(url + itemId, {
      method: 'GET'
    });

    const fullAnswer = await res;
    loginHTTPStatus = fullAnswer.status;
    
    if(loginHTTPStatus === 200){
      const bodyAnswer = await res.json();
      setData(bodyAnswer);
    }
  };

  useEffect(() => { 
    getAtividadeCompleta();
  }, []);

  const sendAtividadeCompletaParaAvaliar = async () => {

    var user = await AsyncStorage.getItem(storageUserKey);
    var id = JSON.parse(user).id;

    data.idStudent = id;

    const res = await fetch(urlSendAtividade, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const fullAnswer = await res;
    loginHTTPStatus = fullAnswer.status;
    
    if(loginHTTPStatus === 200){
      const bodyAnswer = await res.json();
      Alert.alert("Sua atividade foi avaliada e sua nota foi: " + bodyAnswer.evaluatedValue + "/" + bodyAnswer.lesson.maxValue + ".");
      goBack();
    }
  };

  const enviarAtividade = () => {
    sendAtividadeCompletaParaAvaliar();
  }

  const handleQuestionAnswer = (idQuestion, idAnswer, selected) => {
    for (var i = 0; i < data.questions.length; i++) {
      if(data.questions[i].id === idQuestion){
        for (var j = 0; i < data.questions[i].answers.length; i++) {
          if(data.questions[i].answers[j].id === idAnswer){
            data.questions[i].answers[j].isSelected = selected;
            return;
          }
        }
      }
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>     
          <SafeAreaView style={styles.container}>
            <FlatList
              ListHeaderComponent={<View>
                                    <Text style={styles.title}>Aqui você verá todas as questões da atividade {itemName}</Text>
                                  </View>}
              data={data.questions}
              renderItem={({item}) => <Questao Text={item.text}
                                          Alternativas={item.answers}
                                          handleQuestionAnswer = {handleQuestionAnswer}
                                          IdQuestion ={item.id}
                                      />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <KlugButton 
              mode="contained"
              title='Enviar'
              onPress={enviarAtividade}>
          </KlugButton>
      </View>
    </ScrollView>
  );
}