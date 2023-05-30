import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import {styles, Atividade} from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [lessons, setLessons] = useState([]);
  const getlessons = async () => {

    const storageUserKey = "@kluguser";
    let userDataJson = await AsyncStorage.getItem(storageUserKey);
    let { idTeacher } = JSON.parse(userDataJson);

    const request = await fetch(`${baseUrl}/api/lesson/${idTeacher}`, {
      method: 'GET'
    });

    const response = await request;

    if (response.status === 200) {
      const lessons = await response.json();
      setLessons(lessons);
    }
  };

  useEffect(() => {
    getlessons();
  }, []);

  return (
    <View style={styles.containerPg}>
      <View style={styles.containerTitulo}>
        <Text style={styles.title}>Verificar Atividades</Text>
        <Text style={styles.paragraph}>Aqui são exibidas as atividades publicadas.</Text>
      </View>

      <View style={styles.containerAtiv}>
      {lessons.length == 0 ?
        <Text>Nenhuma atividade encontrada.</Text>
        : <List.Section>
          <FlatList
            data={lessons}
            renderItem={
              ({item}) =>
              <Atividade/>
        }
        keyExtractor={item => item.id}/>
        </List.Section>}
      </View>

      <StatusBar style="auto" />
    </View>
  );

  
}