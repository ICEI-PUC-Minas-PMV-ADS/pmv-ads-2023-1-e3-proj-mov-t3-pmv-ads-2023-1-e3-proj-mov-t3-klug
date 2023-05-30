import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./AtividadesAvaliadasPage.styles";
import AtividadeAvaliada from "../../components/Lists/AtividadeAvaliada"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-web';

export default function AtividadesAvaliadasPage() {
  
  const ISDEVELOPMENT = True;
  const url = ISDEVELOPMENT ? "https://localhost:7161/api/lesson/evaluated/" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson/evaluated/";
  const storageUserKey = "@kluguser";
  let loginHTTPStatus;

  const [data, setData] = useState([]);

  const getAtividadesAvaliadasAnswer = async () => {

    var user = await AsyncStorage.getItem(storageUserKey);
    var idStudent = JSON.parse(user).idStudent;

    const res = await fetch(url + idStudent, {
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
    getAtividadesAvaliadasAnswer();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>Aqui você verá todas as suas atividades avaliadas!</Text>
          </View>
          
          <SafeAreaView style={styles.container}>
            <FlatList
              data={data}
              renderItem={({item}) => <AtividadeAvaliada 
                                        NomeAtividade={item.lesson.name}
                                        NomeProfessor={item.lesson.teacher.user.firstName}
                                        DataPublicação={item.evaluatedTimestamp}
                                        NotaAluno={item.evaluatedValue}
                                        Total={item.lesson.maxValue}/> }
              keyExtractor={item => item.id}
            />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}