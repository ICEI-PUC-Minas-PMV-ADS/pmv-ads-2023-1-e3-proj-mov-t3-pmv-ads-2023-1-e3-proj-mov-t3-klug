import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./AtividadesPublicadasPage.styles";
import AtividadePublicada from "../../components/Lists/AtividadePublicada"
import { ScrollView } from 'react-native';

export default function AtividadesPublicadasPage({navigation}) {
  
  const ISDEVELOPMENT = false;
  const url = ISDEVELOPMENT ? "https://localhost:7161/api/lesson/published" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson/published";
  let loginHTTPStatus;

  const [data, setData] = useState([]);

  const getAtividadesPublicadasAnswer = async () => {

    const res = await fetch(url, {
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
    getAtividadesPublicadasAnswer();
  }, []);

  const selectItem = (itemId, itemName) => {
    navigation.navigate('Atividade em andamento', {
      itemId: itemId,
      itemName: itemName,
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>Aqui você verá todas as atividades publicadas!</Text>
          </View>
          
          <SafeAreaView style={styles.container}>
            <FlatList
              data={data}
              renderItem={({item}) => <TouchableOpacity onPress={() => selectItem(item.lesson.id, item.lesson.name)}>
                                        <AtividadePublicada 
                                        NomeAtividade={item.lesson.name}
                                        NomeProfessor={item.lesson.teacher.user.firstName}
                                        DataPublicação={item.publishedTimestamp}
                                        Total={item.lesson.maxValue}/> 
                                      </TouchableOpacity>}
              keyExtractor={item => item.id}
            />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}