import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, Text } from 'react-native';
import styles from "./styles";
import StudentStatisticsCard from "../../components/StudentStatisticsCard";
import { List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeTeacher() {

  const ISDEVELOPMENT = True;
  const baseUrl = ISDEVELOPMENT ? "https://localhost:7161" : "http://dieguitoklug-001-site1.etempurl.com";

  const [lessons, setLessons] = useState([]);

  const getEvaluatedLessons = async () => {

    const storageUserKey = "@kluguser";
    let userDataJson = await AsyncStorage.getItem(storageUserKey);
    let { idTeacher } = JSON.parse(userDataJson);

    const request = await fetch(`${baseUrl}/api/lesson/evaluated/teacher/${idTeacher}`, {
      method: 'GET'
    });

    const response = await request;

    if (response.status === 200) {
      const evaluatedLessons = await response.json();
      setLessons(evaluatedLessons);
    }

  };

  useEffect(() => {
    getEvaluatedLessons();
  }, []);

  return (
    <View style={styles.container}>

      {lessons.length == 0 ?
        <Text>Nenhuma atividade avaliada encontrada.</Text>
        : <List.Section>
          <FlatList
            data={lessons}
            renderItem={
              ({ item }) =>
                <StudentStatisticsCard
                  name={`${item.lesson.name} - ${item.student.user.firstName} ${item.student.user.lastName}`}
                  grade={item.evaluatedValue}
                  isApproved={item.isApproved} />
            }
            keyExtractor={item => item.id}
          />
        </List.Section>}

      <StatusBar style="auto" />
    </View>
  );
}