import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import styles from "./styles";
import {Atividade} from "./Atividade";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const ISDEVELOPMENT = false;
  const baseUrl = ISDEVELOPMENT ? "https://localhost:7161" : "http://dieguitoklug-001-site1.etempurl.com";

  const [lessons, setLessons] = useState([]);

  const getlessons = async () => {

    const storageUserKey = "@kluguser";
    let userDataJson = await AsyncStorage.getItem(storageUserKey);
    let { idTeacher } = JSON.parse(userDataJson);

    const request = await fetch(`${baseUrl}/api/lessons/${idTeacher}`, {
      method: 'GET'
    });

    const response = await request;

    if (response.status === 200) {
      const allLessons = await response.json();
      setLessons(allLessons);
      console.log(allLessons)
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
        <Text style={styles.msgAtividade}>Nenhuma atividade encontrada.</Text>
        : <List.Section>
          <FlatList
            data={lessons}
            renderItem={
              ({ item }) =>
              <Atividade 
                name={`${item.name}`}
                idLesson={`${item.id}`}
                state={item.isRemoved ? "Fechada" : "Aberta"}
              />
        }
        keyExtractor={item => item.id}/>
        </List.Section>}
      </View>

      <StatusBar style="auto" />
    </View>
  );

  
}